const express = require('express');

const Routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

Routes.get('/users', PlayerController.index);
Routes.get('/users/:id', PlayerController.show);

Routes.post('/users', PlayerController.create);

Routes.put('/users/:id', PlayerController.update);

Routes.delete('/users/:id', PlayerController.deleteOne);
Routes.delete('/users', PlayerController.deleteAll);

module.exports = Routes;