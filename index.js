const  express = require('express');

const routes = require('./src/routes');

require ('dotenv').config();

const {init} = require("./src/services/serviceLocator/composerLocator");

const morgan = require('morgan');

const { connectDB } = require('./src/services/database/conexion.js');

const cookie = require('cookie-parser');

const cookieParser = require('cookie-parser');

const cors = require('cors');

const session = require('express-session');


const server = express()

connectDB();

server.use(session({
    secret: 'florence_hash',
    resave: false,
    saveUninitialized: false
}));

server.use(morgan('dev'));

server.use(express.json());

server.use(cors());

server.use(cookieParser());

routes(server);
init();

server.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto: ', process.env.PORT);
})

