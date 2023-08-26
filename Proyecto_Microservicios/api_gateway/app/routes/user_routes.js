// user_routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.post('/register', userController.registerUser);
router.get('/:username', userController.getUserByUsername);

module.exports = router;
