// validation.js
const validateOrderData = (orderData) => {
    if (!orderData || !orderData.items || orderData.items.length === 0) {
        return false;
    }
    // Validar otros campos según tus necesidades
    return true;
};

module.exports = {
    validateOrderData
};
