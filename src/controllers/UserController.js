const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        let data = { name, email, password }

        const user = await User.create(data);

        return res.status(201).json(user);
    }

};