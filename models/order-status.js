const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const OrderStatus = sequelize.define('orderStatus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    status: Sequelize.STRING
});

module.exports = OrderStatus;