// middleware_rpc_grpc.js
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../../proto/order.proto'; // Ruta al archivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const orderProto = grpc.loadPackageDefinition(packageDefinition).order;

const orderService = new orderProto.OrderService('localhost:50051', grpc.credentials.createInsecure());

module.exports = (req, res, next) => {
    const orderData = req.body;

    orderService.CreateOrder(orderData, (error, response) => {
        if (error) {
            console.error('Error en la llamada RPC:', error);
            return res.status(500).json({ error: 'Error en la llamada RPC' });
        }

        console.log('Respuesta RPC:', response);
        next();
    });
};
