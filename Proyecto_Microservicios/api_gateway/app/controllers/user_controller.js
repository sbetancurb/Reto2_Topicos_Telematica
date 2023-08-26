// user_controller.js
const axios = require('axios');

exports.registerUser = async (req, res) => {
    try {
        const response = await axios.post('http://microservicio-usuarios:3000/register', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

exports.getUserByUsername = async (req, res) => {
    try {
        const response = await axios.get(`http://microservicio-usuarios:3000/${req.params.username}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
};
