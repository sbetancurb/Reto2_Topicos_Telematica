// order_producer.js
const amqp = require('amqplib');
const config = require('../config');

const publishOrderMessage = async (orderData) => {
    try {
        const connection = await amqp.connect(config.rabbitMQUrl);
        const channel = await connection.createChannel();
        const queue = 'order_queue';

        await channel.assertQueue(queue, { durable: true });
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(orderData)), { persistent: true });

        console.log('Mensaje de pedido publicado:', orderData);

        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error('Error en el productor de mensajes:', error);
    }
};

module.exports = {
    publishOrderMessage
};
