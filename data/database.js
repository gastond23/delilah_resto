const Sequelize = require('sequelize');

const sequelize = new Sequelize('delilah_resto', 'root', 'betsabeXl23', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;