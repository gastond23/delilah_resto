const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    date: Sequelize.DATE,
    id_order_status: Sequelize.INTEGER(1),
    id_pay_status: Sequelize.INTEGER(1)
});

module.exports = Order;