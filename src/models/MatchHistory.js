const mongoose = require('mongoose');

const MatchHistorySchema = new mongoose.Schema({
    winnerName: {
        type: String,
        required: true
    },
    winnerGoals: {
        type: Number,
        required: true
    },
    loserName: {
        type: String,
        required: true
    },
    loserGoals: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MatchHistory = mongoose.model('MatchHistory', MatchHistorySchema);

module.exports = MatchHistory;