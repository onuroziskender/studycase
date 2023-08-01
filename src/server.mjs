import Fastify from 'fastify'
import routes from "./backend/routes/backend_routes.js"
//import connector from "./backend/helpers/database.js"
//import connector from './backend/helpers/database.js'
import { plugin as connector } from '../src/backend/helpers/database.js';
import {fastifyCors as cors} from "@fastify/cors";
//const Fastify = require('fastify');
//const routes = require('./backend/routes/backend_routes.js');
//const connector = require('./backend/helpers/database.js');


const fastify = Fastify({
    logger: true
})

//const cors = require('@fastify/cors')
fastify.register(cors, {
    origin: true
})

fastify.register(connector);
fastify.register(routes);

// Declare a route
//fastify.get('/', async function handler (request, reply) {
//})

// Run the server!
try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
