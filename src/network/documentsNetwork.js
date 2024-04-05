const express = require("express");
const Controller = require("../controllers/documents/pdfController");

const router = express.Router();

router.get("/descargar-pdf/:nombreArchivo", Controller.descargarPDF);

module.exports = router;
