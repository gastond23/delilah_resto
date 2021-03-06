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
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    adress: Sequelize.STRING,
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    admin: {
        type: Sequelize.INTEGER(1),
        allowNull: true
    }
});

module.exports = User;