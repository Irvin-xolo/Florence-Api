const  express = require('express');
//const routes = require('');


const server = express();

server.use(express.json());

//routes(server);

server.listen(8000, () => {
    console.log('Servidor iniciado en el puerto 9000!')
})

