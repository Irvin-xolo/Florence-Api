const express = require("express");
const Empleado = require("../../utils/models/empleados.model");
const bcrypt = require('bcryptjs');
const { token } = require("morgan");
const tokenGenerator = require('../../libs/tokenGenerator');

const Controller = {};

Controller.register = async (req, res) => {
    const {nombre, cargo, codigo} =req.body

   try {

    const codigoHash = await bcrypt.hash(codigo, 10);

    const newEmpleado = new Empleado({
        nombre,
        cargo,
        codigo: codigoHash,
    })
    console.log(newEmpleado);

    const empleadoSave = await newEmpleado.save();
    const token = await tokenGenerator({
        id: empleadoSave._id
    })

    res.cookie('token', token);
       
    res.json({
        id: empleadoSave._id,
        nombre: empleadoSave.nombre,
        cargo: empleadoSave.cargo,
        createdAt: empleadoSave.createdAt,
        updatedAt: empleadoSave.updatedAt,
    });

   } catch (error) {
    res.status(500).send(error.message);
   }
}

Controller.login = async (req, res) => {
    const {nombre, codigo} =req.body

   try {

    const empleadoExiste = await Empleado.findOne({nombre});

    if (!empleadoExiste) {
        return res.status(400).json({message: "Empleado no registrado"});
    }
    const coinciden = await bcrypt.compare(codigo, empleadoExiste.codigo);
    if (!coinciden) return res.status(400).json({message: "Codigo incorrecto!"});

    
    const token = await tokenGenerator({
        id: empleadoExiste._id
    })

    res.cookie('token', token);
       
    res.json({
        id: empleadoExiste._id,
        nombre: empleadoExiste.nombre,
        cargo: empleadoExiste.cargo,
        createdAt: empleadoExiste.createdAt,
        updatedAt: empleadoExiste.updatedAt,
    });

   } catch (error) {
    res.status(500).send(error.message);
   }
}

Controller.logout = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
      });
      return res.sendStatus(200);
}

Controller.session = async (req, res) => {
    const empleadoFound = await Empleado.findById(req.decoded.id);

    if(!empleadoFound) return res.status(400).json({
        message: "Empleado no registrado"
    })

    return res.json({
        id: empleadoFound._id,
        nombre: empleadoFound.nombre,
        createdAt: empleadoFound.createdAt,
        updatedAt: empleadoFound.updatedAt,
    });
}

module.exports = Controller;
