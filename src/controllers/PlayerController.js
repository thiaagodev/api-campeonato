const Player = require('../models/Player');
const MatchHistory = require('../models/MatchHistory');

module.exports = {

    async create(req, res) {
        try{
            const { name } = req.body;

            const player = await Player.create({name});

            return res.json(player);
            
        } catch(err) {
            console.error(err);
        }
    },

    async index(req, res) {
        try{
            const players = await Player.find().sort({ score: 'desc',  goalDifference: 'desc', goalsScored: 'desc'});

            return res.json(players);
        } catch(err) {
            console.error(err);
        }
    },

    async show(req, res) {
        try{
            const { id } = req.params;

            const player = await Player.findById(id);

            return res.json(player);
        } catch(err) {
            console.error(err);
        }
    },

    async update(req, res) {
        try{
            const { wins, loses, goalsScored, concededGoals } = req.body;
            const { id } = req.params;
            
            const player = await Player.findById(id);

            const score = parseInt(wins) * 3;
            const goalDifference = parseInt(goalsScored) - parseInt(concededGoals);
            const gamesPlayed = parseInt(wins) + parseInt(loses);

            const newPlayer = {
                score: score + player.score,
                wins: wins + player.wins,
                loses: loses + player.loses,
                goalsScored: goalsScored + player.goalsScored,
                concededGoals: concededGoals + player.concededGoals,
                goalDifference: goalDifference + player.goalDifference,
                gamesPlayed: gamesPlayed + player.gamesPlayed,
            }

            const updatedPlayer = await Player.findOneAndUpdate({ _id: id }, newPlayer);
            
            return res.json(updatedPlayer);

        } catch(err) {
            console.error(err);
        }
    },

    async resetAll(req, res) {
        try{
            const resetPlayers = {
                score: 0,
                wins: 0,
                loses: 0,
                goalsScored: 0,
                concededGoals: 0,
                goalDifference: 0,
                gamesPlayed: 0,
            }

            const reset = await Player.updateMany({}, resetPlayers);
            await MatchHistory.deleteMany();

            return res.json(reset);
        } catch(err) {
            console.error(err);
        }
    },

    async deleteOne(req, res) {
        try{
            const { id } = req.params;

            const deletedPlayer = await Player.findByIdAndDelete({_id: id});

            return res.json(deletedPlayer);
        } catch(err) {
            console.error(err)
        }
    },

    async deleteAll(req, res) {
        try{
            const deletedPlayers = await Player.deleteMany()

            return res.json(deletedPlayers);
        } catch(err) {
            console.error(err);
        }
    }
}