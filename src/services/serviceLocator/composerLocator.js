const serviceLocator = require("./dependencyLocator")
const databaseConexion = require("../database")

const Diagnostico = require("../../utils/diagnostico")
const Empleados = require("../../utils/empleados")
const Pacientes = require("../../utils/paciente")

const types = {
    db: "databaseConexion",
    diagnostico: "diagnosticoUtils",
    empleados: "empleadosUtils",
    pacientes: "pacientesUtils"
}

const di = serviceLocator.getInstance();

async function init() {
    const db = await databaseConexion.getInstance();
    di.bindFactory(types.db, () => db)
}

function getDiagnosticoInstance() {
    try {
        const existsInstance = di.get(types.diagnostico);
        if (!existsInstance) {
            const db = di.get(types.db)
            di.bindLazySingleton(types.diagnostico, () => new Diagnostico(db))
            return di.get(types.diagnostico)
        }
        return di.get(types.diagnostico)
    } catch {
        const db = di.get(types.db)
        di.bindLazySingleton(types.diagnostico, () => new Diagnostico(db))
        return di.get(types.diagnostico)
    }
}

function getEmpleadosInstance() {
    try {
        const existsInstance = di.get(types.empleados);
        if (!existsInstance) {
            const db = di.get(types.db)
            di.bindLazySingleton(types.empleados, () => new Empleados(db))
            return di.get(types.empleados)
        }
        return di.get(types.empleados)
    } catch {
        const db = di.get(types.db)
        di.bindLazySingleton(types.empleados, () => new Empleados(db))
        return di.get(types.empleados)
    }
}

function getPacientesInstance() {
    try {
        const existsInstance = di.get(types.pacientes);
        if (!existsInstance) {
            const db = di.get(types.db)
            di.bindLazySingleton(types.pacientes, () => new Pacientes(db))
            return di.get(types.pacientes)
        }
        return di.get(types.pacientes)
    } catch {
        const db = di.get(types.db)
        di.bindLazySingleton(types.pacientes, () => new Pacientes(db))
        return di.get(types.pacientes)
    }
}

module.exports = {
    di,
    init,
    getPacientesInstance,
    getDiagnosticoInstance,
    getEmpleadosInstance
}