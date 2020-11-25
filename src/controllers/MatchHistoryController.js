const MatchHistory = require('../models/MatchHistory');
const { deleteAll } = require('./PlayerController');

module.exports = {
    async index(req, res) {
        try {
            const history = await MatchHistory.find().sort({ createdAt: 'desc' });

            return res.json(history);
        } catch(err) {
            console.error(err)
        }
    },

    async create(req, res) {
        try {
            const { winnerName, winnerGoals, loserName, loserGoals } = req.body;

            const match = await MatchHistory.create({
                winnerName, 
                winnerGoals, 
                loserName, 
                loserGoals
            });
    
            res.json(match);
        } catch(err) {
            console.error(err)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const deletedMatch = await MatchHistory.findByIdAndDelete({ _id: id });
    
            res.json(deletedMatch);
        } catch(err) {
            console.error(err)
        }
    },

    async deleteAll(req, res) {
        try {
            const deletedMatches = await MatchHistory.deleteMany();
        
            res.json(deletedMatches);
        } catch(err) {
            console.error(err)
        }
    }
}