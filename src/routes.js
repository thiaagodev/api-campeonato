const express = require('express');

const Routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

Routes.post('/users', PlayerController.create);
Routes.get('/users', PlayerController.index);
Routes.get('/users/:id', PlayerController.show);

module.exports = Routes;