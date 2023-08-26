// order_controller.js
const axios = require('axios');

exports.createOrder = async (req, res) => {
    try {
        const response = await axios.post('http://microservicio-pedidos:3000/create-order', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};

// Otros métodos relacionados con la gestión de pedidos
