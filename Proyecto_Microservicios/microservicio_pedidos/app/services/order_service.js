// order_service.js
const OrderModel = require('../models/order_model');

class OrderService {
    constructor() {
        this.orders = [];
        this.currentId = 1;
    }

    createOrder(orderData) {
        const newOrder = new OrderModel(this.currentId.toString(), orderData.items, orderData.userId);
        this.orders.push(newOrder);
        this.currentId++;
        return newOrder;
    }

    // Otros métodos relacionados con la gestión de pedidos
}

module.exports = new OrderService();
