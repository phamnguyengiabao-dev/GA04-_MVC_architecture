const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/register', userController.showRegistrationForm);
router.post('/register', userController.registerUser);

module.exports = router;
