const Player = require('../models/Player');

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
            const player = await Player.find().sort({ score: 'desc' });

            return res.json(player);
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
            
            const score = parseInt(wins) * 3;
            const goalDifference = parseInt(goalsScored) - parseInt(concededGoals);
            const gamesPlayed = parseInt(wins) + parseInt(loses);

            const newPlayer = {
                score,
                wins,
                loses,
                goalsScored,
                concededGoals,
                goalDifference,
                gamesPlayed
            }

            const updatedPlayer = await Player.findOneAndUpdate({ _id: id }, newPlayer);
            
            return res.json(updatedPlayer);

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