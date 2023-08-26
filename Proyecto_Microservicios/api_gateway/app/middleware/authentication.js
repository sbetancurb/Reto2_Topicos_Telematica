// authentication.js
const axios = require('axios');

module.exports = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        const response = await axios.get('http://microservicio-usuarios:3000/authenticate', {
            headers: { Authorization: token }
        });

        if (response.status === 200) {
            req.user = response.data.user;
            next();
        } else {
            res.status(401).json({ error: 'Token inválido' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};
