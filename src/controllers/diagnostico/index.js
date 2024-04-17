const composerLocator = require("../../services/serviceLocator/composerLocator");


async function getDiagnosticoByFechaController(NombrePaciente, FechaDiagnostico){
    //Muestra un diagnostico en base a una fecha y un nombre
    const DiagnosticoInstance = composerLocator.getDiagnosticoInstance();
    const {
        rows, fields
    } = await DiagnosticoInstance.getDiagnosticoByFecha(NombrePaciente, FechaDiagnostico);

    return{
        rows,
        fields
    };
}

async function getDiagnosticoByNameController(nombre){
    //Muestra los diagnosticos de un paciente en base a su nombre
    const DiagnosticoInstance = composerLocator.getDiagnosticoInstance();
    const {
        rows,
        fields
    } = await DiagnosticoInstance.getDiagnosticoByName(nombre);
    return{
        rows,
        fields
    };

}   

async function InsertarDiagnostico(DataDiagnostico){
    //Inserta un nuevo diagnostico cuando se le pasa un Nombre y los datos del diagnostico
    const{
        NombreCompleto, 
        Temperatura, 
        Altura, 
        Peso, 
        PresionArterial, 
        Oxigenacion, 
        LatidosPorMinuto, 
        RespiracionPorMinuto, 
        FechaHora, 
        Observaciones
    } = DataDiagnostico;
    const DiagnosticoInstance = composerLocator.getDiagnosticoInstance();
    return DiagnosticoInstance.InsertarDiagnostico({
        NombreCompleto, 
        Temperatura, 
        Altura, 
        Peso, 
        PresionArterial, 
        Oxigenacion, 
        LatidosPorMinuto, 
        RespiracionPorMinuto, 
        FechaHora, 
        Observaciones
    });
}

module.exports = {
    getDiagnosticoByFechaController,
    getDiagnosticoByNameController,
    InsertarDiagnostico
}