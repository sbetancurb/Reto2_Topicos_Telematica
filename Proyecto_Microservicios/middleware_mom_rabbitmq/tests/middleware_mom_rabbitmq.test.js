// middleware_mom_rabbitmq.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const amqp = require('amqplib');
const config = require('../config');
const orderProducer = require('../app/producers/order_producer');

describe('Middleware MOM RabbitMQ', () => {
    it('should publish an order message to the queue', async () => {
        const stubbedConnect = sinon.stub(amqp, 'connect').resolves({
            createChannel: async () => ({
                assertQueue: async () => {},
                sendToQueue: (queue, message) => {}
            }),
            close: () => {}
        });

        const orderData = {
            userId: 'user123',
            items: [{ name: 'Product A', quantity: 2 }]
        };

        await orderProducer.publishOrderMessage(orderData);

        expect(stubbedConnect.calledOnce).to.be.true;

        stubbedConnect.restore();
    });

    // Agrega más pruebas según tus necesidades
});
