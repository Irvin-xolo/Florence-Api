const express = require("express");
const Controller = require("../controllers/personal/index");
//const authRequired = require('../middlewares/validarToken'); 

const router = express.Router();

router.get("/", Controller.getAllEmpleados);
router.get("/:id", Controller.getEmpleadoById);
router.post("/",Controller.createEmpleado);
router.put("/:id", Controller.updateEmpleado);
router.delete("/:id",  Controller.deleteEmpleado);

module.exports = router;
