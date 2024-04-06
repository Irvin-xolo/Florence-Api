//Mysql Conexion

const mysql = require('mysql2/promise');
require('dotenv').config()

class Database{
    static instance;
    constructor(){

    }

    static async getInstance(){
        if (this.instance){
            return this.instance;
        }
        const dbConfig = {
            user: process.env.FLORENCEMYSQL_DB_USER,
            password: process.env.FLORENCEMYSQL_DB_PASSWORD,
            database : process.env.FLORENCEMYSQL_DB_NAME,
            port:process.env.FLORENCEMYSQL_DB_PORT
        };

        this.instance = await mysql.createConnection(dbConfig)
        console.log(dbConfig)
        return this.instance;
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(error => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }
}


module.exports = Database;




