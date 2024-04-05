class Diagnostico {

    database;
    constructor(db){
        this.database = db;
    }
    
    async getDiagnosticoByFecha(){
        const {NombrePaciente , FechaDiagnostico } = params;
        const [rows, fields] = await this.database.execute(
        "CALL DiagnosticoPorFecha(?, ?);", [NombrePaciente , FechaDiagnostico]
        )   
        return{
            rows, fields
        };
    }

    async getDiagnosticoByName(nombre){
        console.log(nombre);
        const [rows, fields] = await this.database.execute(
            "CALL DiagnosticoPacientes(?);", [nombre]
        );
        return {
            rows,
            fields,
        };
    }
    
    async InsertarDiagnostico(DataDiagnostico){
        const {
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
        console.log(DataDiagnostico);
        const [rows, fields] = await this.database.execute(
            "CALL InsertarDiagnostico(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", 
                [NombreCompleto, 
                Temperatura, 
                Altura, 
                Peso, 
                PresionArterial, 
                Oxigenacion, 
                LatidosPorMinuto, 
                RespiracionPorMinuto, 
                FechaHora, 
                Observaciones]
        );
        return{
            rows,
            fields
        }
    }
}

module.exports = Diagnostico;