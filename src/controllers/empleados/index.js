const composerLocator = require("../../services/serviceLocator/composerLocator");

async function getEmpleadosController(){
    const EmpleadosInstance = composerLocator.getEmpleadosInstance();
    const {rows, fields} = await EmpleadosInstance.getEmpleados();

    return{
        rows, 
        fields,
    };
}

async function RegistrarEmpleado(empleado){
    const {
        NombreCompleto,
        Cargo, 
        CodigoEmpleado
    } = empleado;

    const EmpleadosInstance = composerLocator.getEmpleadosInstance();

    return EmpleadosInstance.RegistrarEmpleado({
        NombreCompleto,
        Cargo, 
        CodigoEmpleado
    })
}

module.exports = {
    getEmpleadosController,
    RegistrarEmpleado
}