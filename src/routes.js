const express = require('express');

const Routes = express.Router();

const PlayerController = require('./controllers/PlayerController');
const MatchHistoryController = require('./controllers/MatchHistoryController');

// Players Routes

Routes.get('/players', PlayerController.index);
Routes.get('/players/:id', PlayerController.show);

Routes.post('/players', PlayerController.create);

Routes.put('/players/:id', PlayerController.update);
Routes.put('/reset-players', PlayerController.resetAll);

Routes.delete('/players/:id', PlayerController.deleteOne);
Routes.delete('/players', PlayerController.deleteAll);

// Match History Routes

Routes.get('/match-history', MatchHistoryController.index);

Routes.post('/match-history', MatchHistoryController.create);

Routes.delete('/match-history/:id', MatchHistoryController.delete);
Routes.delete('/match-history', MatchHistoryController.deleteAll);

module.exports = Routes;