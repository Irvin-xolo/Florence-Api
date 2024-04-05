const Routes = require("../utils/constant/routes.json");

const EmpleadosNetwork = require("../network/empleadosNetwork")

const PacientesNetwork = require("../network/pacientesNetwork")

const DiagnosticoNetwork = require("../network/diagnosticoNetwork")

//const DocumentsNetwork = require("../network/documentsNetwork");

function routes(server){
    server.use(Routes.pacientes, PacientesNetwork)
    server.use(Routes.empleados, EmpleadosNetwork)
    server.use(Routes.diagnostico, DiagnosticoNetwork)
   // server.use(Routes.documents, DocumentsNetwork)
}

module.exports = routes;