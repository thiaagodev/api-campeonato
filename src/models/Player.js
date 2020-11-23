const mongoose = require('../database/db');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    loses: {
        type: Number,
        default: 0
    },
    goalsScored: {
        type: Number,
        default: 0
    },
    concededGoals: {
        type: Number,
        default: 0
    },
    goalDifference: {
        type: Number,
        default: 0
    },
    gamesPlayed: {
        type: Number,
        default: 0
    },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;