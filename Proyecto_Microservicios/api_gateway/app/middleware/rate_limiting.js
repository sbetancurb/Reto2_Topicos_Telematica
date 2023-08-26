// rate_limiting.js
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // Número máximo de solicitudes por IP en la ventana especificada
});

module.exports = apiLimiter;
