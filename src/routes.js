const express = require('express');

const Routes = express.Router();

const UserController = require('./controllers/UserController');

Routes.post('/users', UserController.create);

module.exports = Routes;