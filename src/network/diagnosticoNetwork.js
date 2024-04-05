const express = require("express");
const Controller = require("../controllers/diagnostico/index");

const router = express.Router();

function getDiagnosticoByName(request, response) {
    const nombre = request.params.nombre;
    Controller.getDiagnosticoByNameController(nombre)
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

function getDiagnosticoByFecha(request, response){
    const {NombrePaciente, FechaDiagnostico} = request.params.body;
    Controller.getDiagnosticoByFechaController({
        NombrePaciente, FechaDiagnostico
    })
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

function InsertarDiagnostico(request, response){
    const {
        NombreCompleto, 
        Temperatura, 
        Altura, 
        Peso, 
        PresionArterial, 
        Oxigenacion, 
        LatidosPorMinuto, 
        RespiracionPorMinuto, 
        FechaHora, 
        Observaciones
    } = request.body;
    Controller.InsertarDiagnostico({
        NombreCompleto, 
        Temperatura, 
        Altura, 
        Peso, 
        PresionArterial, 
        Oxigenacion, 
        LatidosPorMinuto, 
        RespiracionPorMinuto, 
        FechaHora, 
        Observaciones
    })
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
    })
}


router.get("/nombre/:nombre", getDiagnosticoByName);
router.get("/", getDiagnosticoByFecha);
router.post("/", InsertarDiagnostico);

module.exports = router;
