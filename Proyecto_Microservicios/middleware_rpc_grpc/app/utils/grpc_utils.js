// grpc_utils.js
const grpc = require('grpc');
const path = require('path');
const config = require('../config');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.join(__dirname, '..', 'proto', 'order.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const orderProto = grpc.loadPackageDefinition(packageDefinition).order;

const orderService = new orderProto.OrderService(config.grpcServerAddress, grpc.credentials.createInsecure());

// Función para realizar una llamada RPC
const callRpc = (method, requestData, callback) => {
    orderService[method](requestData, (error, response) => {
        if (error) {
            console.error(`Error en la llamada RPC ${method}:`, error);
            callback(error, null);
        } else {
            console.log(`Respuesta RPC ${method}:`, response);
            callback(null, response);
        }
    });
};

module.exports = {
    callRpc
};
