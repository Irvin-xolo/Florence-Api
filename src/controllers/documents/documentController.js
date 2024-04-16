const path = require("path");

const Controller = {};

Controller.sendRuta = (req, res) => {
    const rutaArchivo = path.resolve(__dirname, '../../services/extras/plantilla_diagnostico.xlsx');
    res.send({ ruta: rutaArchivo });
}

module.exports = Controller;
