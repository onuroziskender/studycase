const fastifyPlugin = require('fastify-plugin')


const path = require('path');
require ('dotenv').config({
    override: true,
    path: path.join(__dirname,'development.env')
})

//const {Pool,Client} = require ('pg')

// const pool = new Pool({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PORT
// });


const {Client} = require ('pg');
const client = new Client({
    user: "postgres",
    password:"onurgs99",
    host: process.env.HOST,
    port: process.env.PORT,
    database: "studycase"
})

async function connector(fastify, options) {
    try {
        await client.connect()
        console.log("db connected succesfully")
        fastify.decorate('db', {client})
    } catch(err) {
        console.error(err)
    }
}
module.exports = {
    plugin: fastifyPlugin(connector),
    client
};



// (async () => {
//     const client = await pool.connect();
//     try{
//         const {rows} = await client.query('SELECT current_user');
//         const currentUser = rows[0]['currrent_user']
//         console.log(currentUser);
//         console.log("Working")
//     }
//     catch (err) {
//         console.log(err);
//     }
//    finally {
//         client.release();
//     }
// })();