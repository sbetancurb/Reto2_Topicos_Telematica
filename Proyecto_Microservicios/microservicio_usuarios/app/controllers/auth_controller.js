// auth_controller.js
const authService = require('../services/auth_service');
const userService = require('../services/user_service');

exports.authenticateUser = (req, res) => {
    const { username, password } = req.body;
    const user = userService.getUserByUsername(username);

    if (user && user.password === password) {
        const token = authService.generateToken(user);
        res.status(200).json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
};
