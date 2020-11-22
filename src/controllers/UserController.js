const User = require('../models/User');

module.exports = {

    async create(req, res) {
        try{
            const { name } = req.body;

            const user = await User.create({name});

            return res.json(user);
            
        } catch(err) {
            console.error(err);
        }
    },

    index(req, res) {
        const users = await User.find();

        return res.json(users);
    }

}