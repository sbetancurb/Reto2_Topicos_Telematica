// order_model.js
class OrderModel {
    constructor(id, items, userId) {
        this.id = id;
        this.items = items;
        this.userId = userId;
        this.createdAt = new Date();
    }
}

module.exports = OrderModel;
