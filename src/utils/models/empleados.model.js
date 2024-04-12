const mongoose = require('mongoose');

const empleadoSchema =new  mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    cargo: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Empleado', empleadoSchema);
