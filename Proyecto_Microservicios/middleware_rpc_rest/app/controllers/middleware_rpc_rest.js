// middleware_rpc_rest.js
const axios = require('axios');
const config = require('../config');

module.exports = (req, res, next) => {
    const orderData = req.body;

    axios.post(config.rpcServerUrl + '/create-order', orderData)
        .then(response => {
            console.log('Respuesta de la llamada RPC REST:', response.data);
            next();
        })
        .catch(error => {
            console.error('Error en la llamada RPC REST:', error);
            res.status(500).json({ error: 'Error en la llamada RPC REST' });
        });
};
