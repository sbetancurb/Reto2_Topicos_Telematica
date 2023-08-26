// user_service.js
const UserModel = require('../models/user_model');

class UserService {
    constructor() {
        this.users = [];
    }

    registerUser(userData) {
        const newUser = new UserModel(/* generate unique ID */, userData.username, userData.email, userData.password);
        this.users.push(newUser);
        return newUser;
    }

    getUserByUsername(username) {
        return this.users.find(user => user.username === username);
    }
}

module.exports = new UserService();
