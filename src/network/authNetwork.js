const express = require("express");

const Controller = require("../controllers/auth/index");
const authRequired = require('../middlewares/validarToken'); 
const router = express.Router();



router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.post("/logout", Controller.logout);
router.get("/session", authRequired, Controller.session);

module.exports = router;
