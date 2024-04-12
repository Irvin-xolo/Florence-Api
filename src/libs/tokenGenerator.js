const jwt = require('jsonwebtoken');
require("dotenv").config();


function tokenGenerator(payload){

   return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
        process.env.SECRET_TOKEN_KEY,
        {
          expiresIn: "1h",
        },
        (error, token) => {
            if (error) reject(error)
            resolve(token)
        });
    });
}

module.exports = tokenGenerator;

