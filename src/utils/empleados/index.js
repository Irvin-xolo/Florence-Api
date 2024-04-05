class Empleados{

    database;
    constructor(db){
        this.database = db;
    }

    async getEmpleados(){
        const [rows, fields] = await this.database.query(
          "SELECT * FROM empleados"
        );
        return {
            rows,
            fields,
        };
    }

    async RegistrarEmpleado(empleado){
        const {
            NombreCompleto,
            Cargo,
            CodigoEmpleado
        } = empleado;
        console.log(empleado);
        const [rows, fields] = await this.database.execute(
         "INSERT INTO empleados (NombreCompleto, Cargo, CodigoEmpleado) VALUES (?, ?, ?)",
         [NombreCompleto, Cargo, CodigoEmpleado]
        );
        return {
            rows,
            fields,
        };
    }
}

module.exports = Empleados;