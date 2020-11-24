const MatchHistory = require('../models/MatchHistory');

module.exports = {
    async index(req, res) {
        const history = await MatchHistory.find().sort({ createdAt: 'desc' });

        return res.json(history);
    },

    async create(req, res) {
        const { winnerName, winnerGoals, loserName, loserGoals } = req.body;

        const match = await MatchHistory.create({
            winnerName, 
            winnerGoals, 
            loserName, 
            loserGoals
        });

        res.json(match);
    },

    async delete(req, res) {
        const { id } = req.params;

        const deletedMatch = await MatchHistory.findByIdAndDelete({ _id: id });

        res.json(deletedMatch);
    }
}