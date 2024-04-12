const composerLocator = require("../../services/serviceLocator/composerLocator");


async function getPacienteHistorial(nombre){
    //Muestra el historial del paciente cuando se le pasa como parametro el nombre de dicho paciente
    const PacientesInstance = composerLocator.getPacientesInstance();
    const {rows, fields } = await PacientesInstance.getPacienteHistorial(nombre);

    if (!nombre){
        throw new Error('Paciente no encontrado');
    }
    return {
        rows,
        fields,
    };
}

async function getPacienteInfoController(paciente){
    //Muestra solo la informacion del paciente cuando se le da como parametro el nombre del mismo
    const PacientesInstance = composerLocator.getPacientesInstance();
    const {
        rows,
        fields 
    } = await PacientesInstance.getPacienteInfo(paciente);
    if (!paciente){
        throw new Error('Paciente no encontrado');
    }
    return {
        rows,
        fields,
    };
}

async function RegistrarNuevoPaciente(paciente){
    //Registra un nuevo paciente cuando se le dan los datos de la constante "paciente"
    const {NombreCompleto,
        FechaNacimiento,
        NumSeguroSoc,
        Telefono,
        Email,
        ContactoEmergenciaNombre,
        ContactoEmergenciaTelefono,
        Alergias,
        Diabetes,
        Discapacidad } = paciente;
    const PacientesInstance = composerLocator.getPacientesInstance();
    console.log("Registrando Paciente: ", {
        NombreCompleto,
        FechaNacimiento,
        NumSeguroSoc,
        Telefono,
        Email,
        ContactoEmergenciaNombre,
        ContactoEmergenciaTelefono,
        Alergias,
        Diabetes,
        Discapacidad
    });

    return PacientesInstance.RegistrarNuevoPaciente({
        NombreCompleto,
        FechaNacimiento,
        NumSeguroSoc,
        Telefono,
        Email,
        ContactoEmergenciaNombre,
        ContactoEmergenciaTelefono,
        Alergias,
        Diabetes,
        Discapacidad
    })
}

async function ListarPacientesController(){
    //Retorna una lista de los pacientes que ya han sido registrados previamente
    const PacientesInstance = composerLocator.getPacientesInstance();
    const{
        rows,
        fields
    } = await PacientesInstance.ListarPacientes();

    return{
        rows,
        fields
    };
}


module.exports = {
    getPacienteHistorial,
    getPacienteInfoController,
    RegistrarNuevoPaciente,
    ListarPacientesController
}