require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD, 
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql', // Defina o dialeto diretamente como uma string
    logging: false, // Isso desativa a saída de log do Sequelize
  }
);

module.exports = sequelize; // Exporta a instância do Sequelize
