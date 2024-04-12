const jwt = require('jsonwebtoken');
require("dotenv").config();

function authRequired(req, res, next) {
    const { token } = req.cookies;
    if (!token) 
        return res.status(401).json({
            message: "Acceso denegado"
        });
    
    jwt.verify(token, process.env.SECRET_TOKEN_KEY, (error, Empleado) => {
        if (error) 
            return res.status(403).json({
                message: "Token no válido"
            });
        
            
        req.decoded = Empleado;

        next();
    });
}

module.exports = authRequired;
