const mongoose = require('mongoose');

const ParticipantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    points: {
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
    goalDifference: {
        type: Number,
        default: 0
    }
});

const Participants = mongoose.model('Participants', ParticipantsSchema);

module.exports = Participants;