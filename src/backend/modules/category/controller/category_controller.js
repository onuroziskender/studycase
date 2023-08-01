const Fastify = require('fastify');
const { v4: uuidv4 } = require('uuid');
const {client} = require('../../../helpers/database.js');
//const client = require('/src/backend/helpers/database.js');

async function getAllSubCategories(request, reply) {
console.log("entered")

    const {parent_id} = request.params;
    try {
        //const { rows } = await client.query('SELECT * FROM categories WHERE parent_id = 1');
        const { rows } = await client.query('SELECT * FROM categories WHERE parent_id = $1', [parent_id]);
        console.log(rows);
        reply.send(rows);
    } catch (err) {
        throw new Error(err);
    }
}

async function getCategory(request, reply){
    const {id} = request.params;
    try {
        const { rows } = await client.query('SELECT * FROM categories WHERE id = $1', [id]);
        console.log(rows);
        reply.send(rows);
    } catch (err) {
        throw new Error(err);
    }


}
async function addCategory(request, reply) {
    const {name, parent_id} = request.params;
    const newId = uuidv4();
    const deleted = false;
    const selected= false;

    const query = {
        text: `INSERT INTO categories (name, deleted , selected, id, parent_id)
           VALUES($1, $2, $3, $4, $5) RETURNING *`,
         values: [name, deleted, selected, newId, parent_id],

         // text: `INSERT INTO categories (name, deleted , selected, id, parent_id)

          // VALUES(name, deleted , selected, id, parentId) RETURNING *`,
        //values: [id, name, parentId, deleted],
    };

    try {
        const { rows } = await client.query(query);
        console.log(rows[0]);
        reply.code(201);
        return { created: true };
    } catch (err) {
        throw new Error(err);
    }
}

async function updateCategory(request, reply) {
   // const id = request.params.id;
    const { id , name } = request.params;

    const query = {
        text: `UPDATE categories SET
           name = COALESCE($2, name)
           WHERE id = $1 RETURNING *`,
        values: [id, name],
    };

    try {
        const { rows } = await client.query(query);
        console.log(rows[0]);
        reply.code(204);
    } catch (err) {
        throw new Error(err);
    }
}

async function deleteCategory(request, reply) {

    try {
        //const id = request.params.id;
        const { id } = request.params;
        const deleted = true;
        const query = {
            text: `UPDATE categories SET
           deleted = COALESCE($2, deleted)
           WHERE id = $1 RETURNING *`,
            values: [id, deleted],
        };
        const { rows } = await client.query(query);
        console.log(rows[0]);
        reply.code(204);
    } catch (err) {
        throw new Error(err);
    }
}


module.exports = {
    getAllSubCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategory
};