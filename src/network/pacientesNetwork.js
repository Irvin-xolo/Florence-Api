const express = require("express");
const Controller = require("../controllers/pacientes/index");

const router = express.Router();

function getPacienteInfo(request, response){
    const paciente = request.params.paciente;
    Controller.getPacienteInfoController(paciente)
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

function getPacienteHistorial(request, response){
    const nombre = request.params.nombre;
    Controller.getPacienteHistorial(nombre)
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

function RegistrarNuevoPaciente(request, response){
    const {
        NombreCompleto,
        FechaNacimiento,
        NumSeguroSoc,
        Telefono,
        Email,
        ContactoEmergenciaNombre,
        ContactoEmergenciaTelefono,
        Alergias,
        Diabetes,
        Discapacidad
    } = request.body;
    Controller.RegistrarNuevoPaciente({
        NombreCompleto,
        FechaNacimiento,
        NumSeguroSoc,
        Telefono,
        Email,
        ContactoEmergenciaNombre,
        ContactoEmergenciaTelefono,
        Alergias,
        Diabetes,
        Discapacidad
    })
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
        console.log(error);
    });
}

function ListarPacientes(request, response){
    Controller.ListarPacientesController()
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => { 
        response.status(500).send(error.message);
    })
}


router.get("/nombre/:nombre", getPacienteHistorial);
router.get("/paciente/:paciente", getPacienteInfo);
router.post("/", RegistrarNuevoPaciente);
router.get("/", ListarPacientes);

module.exports = router;