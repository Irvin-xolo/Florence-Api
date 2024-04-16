const express = require("express");
const Empleado = require("../../utils/models/empleados.model");
const bcrypt = require('bcryptjs');
const tokenGenerator = require('../../libs/tokenGenerator');

const Controller = {};

Controller.getAllEmpleados = async (req, res) => {
   try {
      const empleados = await Empleado.find();
      res.json(empleados);
   } catch (error) {
      res.status(500).send(error.message);
   }
}

Controller.getEmpleadoById = async (req, res) => {
   try {
      const empleado = await Empleado.findById(req.params.id);
      if (!empleado) {
         return res.status(404).json({ message: "Empleado no encontrado" });
      }
      res.json(empleado);
   } catch (error) {
      res.status(500).send(error.message);
   }
}

Controller.createEmpleado = async (req, res) => {
   const { nombre, cargo, codigo } = req.body;

   try {
      const codigoHash = await bcrypt.hash(codigo, 10);

      const newEmpleado = new Empleado({
         nombre,
         cargo,
         codigo: codigoHash,
      });

      const empleadoSave = await newEmpleado.save();
      const token = await tokenGenerator({
         id: empleadoSave._id
      });

      res.cookie('token', token);
      res.json(empleadoSave);
   } catch (error) {
      res.status(500).send(error.message);
   }
}

Controller.updateEmpleado = async (req, res) => {
   try {
      const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!empleado) {
         return res.status(404).json({ message: "Empleado no encontrado" });
      }
      res.json(empleado);
   } catch (error) {
      res.status(500).send(error.message);
   }
}

Controller.deleteEmpleado = async (req, res) => {
   try {
      const empleado = await Empleado.findByIdAndDelete(req.params.id);
      if (!empleado) {
         return res.status(404).json({ message: "Empleado no encontrado" });
      }
      res.json({ message: "Empleado eliminado exitosamente" });
   } catch (error) {
      res.status(500).send(error.message);
   }
}

module.exports = Controller;
