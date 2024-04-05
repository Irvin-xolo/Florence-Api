//Mongodb Conexion
const mongoose =  require('mongoose');
require ("dotenv").config();

const Conexion = async () => {
    try {
        await mongoose.connect(process.env.FLORENCE_DB_URLI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error.message);
    }
};

module.exports = Conexion;