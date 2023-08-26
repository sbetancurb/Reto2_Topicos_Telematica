// routes.js
const express = require('express');
const userRoutes = require('../app/routes/user_routes');
const orderRoutes = require('../app/routes/order_routes');
const rateLimitingMiddleware = require('../app/middleware/rate_limiting');

const router = express.Router();

// Middleware de rate limiting
router.use(rateLimitingMiddleware);

// Rutas para usuarios
router.use('/users', userRoutes);

// Rutas para pedidos
router.use('/orders', orderRoutes);

module.exports = router;
