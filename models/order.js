const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    }
});

module.exports = Order;