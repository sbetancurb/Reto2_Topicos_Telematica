// order_consumer.js
const amqp = require('amqplib');
const config = require('../config');

const consumeOrderMessages = async () => {
    try {
        const connection = await amqp.connect(config.rabbitMQUrl);
        const channel = await connection.createChannel();
        const queue = 'order_queue';

        await channel.assertQueue(queue, { durable: true });
        console.log('Esperando mensajes de pedidos. Para salir, presiona CTRL+C');

        channel.consume(queue, (message) => {
            if (message !== null) {
                const orderData = JSON.parse(message.content.toString());
                console.log('Mensaje de pedido recibido:', orderData);
                // Realizar el procesamiento necesario con los datos del pedido
                channel.ack(message);
            }
        });
    } catch (error) {
        console.error('Error en el consumidor de mensajes:', error);
    }
};

consumeOrderMessages();
