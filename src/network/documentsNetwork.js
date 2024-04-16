const express = require("express");
const Controller = require("../controllers/documents/documentController");

const router = express.Router();

//const ruta = require("../services/extras/plantilla_diagnostico.xlsx")

router.get("/", Controller.sendRuta);

module.exports = router;
