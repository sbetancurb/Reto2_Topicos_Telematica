// user_controller.js
const userService = require('../services/user_service');

exports.registerUser = (req, res) => {
    const userData = req.body;
    const newUser = userService.registerUser(userData);
    res.status(201).json(newUser);
};

exports.getUserByUsername = (req, res) => {
    const username = req.params.username;
    const user = userService.getUserByUsername(username);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
};