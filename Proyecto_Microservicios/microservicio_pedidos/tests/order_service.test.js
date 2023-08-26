// order_service.test.js
const OrderService = require('../app/services/order_service');
const OrderModel = require('../app/models/order_model');

describe('OrderService', () => {
    let orderService;

    beforeAll(() => {
        orderService = new OrderService();
    });

    it('should create a new order', () => {
        const orderData = {
            items: [{ name: 'Product A', quantity: 2 }, { name: 'Product B', quantity: 3 }],
            userId: 'user123'
        };

        const newOrder = orderService.createOrder(orderData);

        expect(newOrder).toBeInstanceOf(OrderModel);
        expect(newOrder.items).toEqual(orderData.items);
        expect(newOrder.userId).toBe(orderData.userId);
    });

    it('should not create an order with invalid data', () => {
        const invalidOrderData = {
            items: [],
            userId: 'user123'
        };

        const newOrder = orderService.createOrder(invalidOrderData);

        expect(newOrder).toBeNull();
    });

    // Agregar más pruebas relacionadas con el servicio de pedidos
});
