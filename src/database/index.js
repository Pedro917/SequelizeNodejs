const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Dream = require('../models/Dream');

const connection = new Sequelize(dbConfig);

User.init(connection);

// User.dreams(connection.models)

Dream.init(connection);

module.exports = connection;