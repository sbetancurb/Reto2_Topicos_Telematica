// order_controller.js
const orderService = require('../services/order_service');

exports.createOrder = (req, res) => {
    const orderData = req.body;
    const newOrder = orderService.createOrder(orderData);
    res.status(201).json(newOrder);
};

// Otros métodos relacionados con la gestión de pedidos
