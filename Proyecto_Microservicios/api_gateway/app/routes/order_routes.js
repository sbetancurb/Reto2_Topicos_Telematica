// order_routes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller');

router.post('/create-order', orderController.createOrder);
// Agrega más rutas para otros recursos relacionados con pedidos

module.exports = router;
