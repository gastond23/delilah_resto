const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const PayStatus = sequelize.define('payStatus', {
    id_pay_status: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    pay_type: Sequelize.STRING
});

module.exports = PayStatus;