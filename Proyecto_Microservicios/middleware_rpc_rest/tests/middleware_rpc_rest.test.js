// middleware_rpc_rest.test.js
const axios = require('axios');
const { expect } = require('chai');
const sinon = require('sinon');
const config = require('../config');
const middlewareRpcRest = require('../app/controllers/middleware_rpc_rest');

describe('Middleware RPC REST', () => {
    it('should call the RPC REST endpoint', (done) => {
        const mockReq = {
            body: {
                userId: 'user123',
                items: [{ name: 'Product A', quantity: 2 }]
            }
        };
        const mockRes = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };

        // Simular la llamada a la función de middleware
        middlewareRpcRest(mockReq, mockRes, () => {
            expect(mockRes.status.calledWith(200)).to.be.true;
            done();
        });
    });

    // Agrega más pruebas según tus necesidades
});
