// authentication.js
const authService = require('../services/auth_service');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const decodedToken = authService.verifyToken(token);

    if (!decodedToken) {
        return res.status(401).json({ error: 'Token inválido' });
    }

    req.user = decodedToken;
    next();
};