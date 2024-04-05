const  express = require('express');
const routes = require('./src/routes');
require ('dotenv').config();
const {init} = require("./src/services/serviceLocator/composerLocator");

const server = express()

server.use(express.json());

routes(server);
init();

server.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto 9000!')
})

