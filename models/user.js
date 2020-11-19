const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    adress: Sequelize.STRING,
    phone: Sequelize.STRING
});

module.exports = User;