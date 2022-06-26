const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/userController');

routerUsers.post('/login', userController.login);

module.exports = routerUsers;