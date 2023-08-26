// auth_service.js
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user_model');

class AuthService {
    constructor() {
        this.secretKey = 'mysecretkey';
    }

    generateToken(user) {
        return jwt.sign({ id: user.id, username: user.username }, this.secretKey);
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            return null;
        }
    }
}

module.exports = new AuthService();
