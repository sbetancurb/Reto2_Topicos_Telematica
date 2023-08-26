// middleware_rpc_grpc.test.js
const grpc = require('grpc');
const path = require('path');
const { expect } = require('chai');
const config = require('../config');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.join(__dirname, '..', 'proto', 'order.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const orderProto = grpc.loadPackageDefinition(packageDefinition).order;

const orderService = new orderProto.OrderService(config.grpcServerAddress, grpc.credentials.createInsecure());

describe('Middleware RPC gRPC', () => {
    it('should create an order through RPC call', (done) => {
        const orderData = {
            userId: 'user123',
            items: [{ name: 'Product A', quantity: 2 }]
        };

        orderService.CreateOrder(orderData, (error, response) => {
            expect(error).to.be.null;
            expect(response).to.have.property('orderId');
            expect(response).to.have.property('message');
            done();
        });
    });

    // Agrega más pruebas según tus necesidades
});
