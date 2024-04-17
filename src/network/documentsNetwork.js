const express = require("express");
const Controller = require("../controllers/documents/documentController");

const router = express.Router();


router.get("/", Controller.sendRuta);

module.exports = router;
