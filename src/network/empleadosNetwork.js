const express = require("express");
const Controller = require("../controllers/empleados/index");

const router = express.Router();


function getEmpleados(request, response){
    Controller.getEmpleadosController()
    .then((data => {
        response.status(200).json(data);
    }))
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

function RegistrarEmpleado(request, response){
    const {
        NombreCompleto,
        Cargo,
        CodigoEmpleado
    } = request.body;
    Controller.RegistrarEmpleado({
        NombreCompleto,
        Cargo,
        CodigoEmpleado
    })
    .then((data) => {
        response.status(200).json(data);
    })
    .catch((error) => {
        response.status(500).send(error.message);
        console.log(error);
    })
}

router.get("/", getEmpleados);
router.post("/", RegistrarEmpleado);

module.exports = router;


 