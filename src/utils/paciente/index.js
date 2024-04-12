class Pacientes {
  
    database;
    constructor(db){
        this.database = db;
    }
    
    async getPacienteHistorial(nombre){
        console.log(nombre);
        const [rows, fields] = await this.database.execute(
            "CALL HistorialPaciente(?);", [nombre]
        );
        return{
            rows,
            fields,
        };
    }

    async getPacienteInfo(paciente){
        console.log(paciente);
        const [rows, fields] = await this.database.execute(
            "CALL PacienteInfo(?);", [paciente]
        );
        return{
            rows, 
            fields,
        };
    }

    async RegistrarNuevoPaciente(paciente){
        const {
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
        } = paciente;
        console.log(paciente);

        const [rows, fields] = await this.database.execute(
            "CALL RegistrarNuevoPaciente( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", 
            [
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
            ]
        );
        return{
            rows,
            fields,
        };
    }


    async ListarPacientes() {
        const[rows, fields] = await this.database.execute(
            "CALL ListarPacientes();"
        );
        return{
            rows,
            fields
        };
    }
}

module.exports = Pacientes;