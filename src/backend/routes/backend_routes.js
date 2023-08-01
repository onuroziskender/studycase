const CategoryController = require('../../backend/modules/category/controller/category_controller');



module.exports = async (fastify) => {

    fastify.get('/api/subCategories/:parent_id', CategoryController.getAllSubCategories);
    fastify.get('/api/categories/:id', CategoryController.getCategory);
    fastify.post('/api/addCategories/:parent_id/:name', CategoryController.addCategory);
    fastify.post('/api/updateCategories/:id/:name', CategoryController.updateCategory);
    fastify.post('/api/deleteCategory/:id' , CategoryController.deleteCategory);

    // fastify.get('/', {schema: allCategories}, async function (request, reply) {
    //     try {
    //         const {rows} = await client.query('SELECT * FROM categories')
    //         console.log(rows)
    //         reply.send(rows)
    //     } catch(err) {
    //         throw new Error(err)
    //     }
    // })
    //
    // fastify.post('/add', {schema: addCategory}, async function(request, reply) {
    //     const {name} = request.body
    //     const id = uuidv4();
    //     const parentId = uuidv4()  ;
    //     const deleted = false;
    //     //const subCategories = []
    //     const query = {
    //         text: `INSERT INTO categories (id, name, parentId, deleted )
	// 								VALUES($1, $2, $3, $4 ) RETURNING *`,
    //         values: [id, name, parentId, deleted],
    //     }
    //     try {
    //         const {rows} = await client.query(query)
    //         console.log(rows[0])
    //         reply.code(201)
    //         return {created: true}
    //     } catch (err) {
    //         throw new Error(err)
    //     }
    //
    // })
    //
    // fastify.patch('/:id',{schema: updateCategory}, async function (request, reply) {
    //     const id = request.params.id
    //     const {name} = request.body
    //     const query = {
    //         text:  `UPDATE todos SET
	// 							name = COALESCE($1, name),
	// 							WHERE id = $4 RETURNING *`,
    //         values : [name, id]
    //     }
    //     try {
    //         const {rows} = await client.query(query)
    //         console.log(rows[0])
    //         reply.code(204)
    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // })
    //
    //
    fastify.get('/', async (request, reply) => {
        reply.send({
            hello: 'world'
        })
    });
}

