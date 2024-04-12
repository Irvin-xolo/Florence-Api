//Mongodb Conexion
const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb is Connected")
        console.log("{'name': 'cluster0'}")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB };
