// request_validator.js
const validateOrderData = (orderData) => {
    if (!orderData || !orderData.items || orderData.items.length === 0) {
        return false;
    }
    // Puedes agregar más validaciones aquí
    return true;
};

module.exports = {
    validateOrderData
};
