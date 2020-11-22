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
        const player = await Player.find();

        return res.json(player);
    },

    async show(req, res) {
        const { id } = req.params;

        const player = Player.findById({_id: id});

        return res.json(player);
    }

}