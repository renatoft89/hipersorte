const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Bets = require('./bet.model'); // Importe o modelo Bet

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Defina o relacionamento: Um usuário tem muitas apostas
User.hasMany(Bets, { foreignKey: 'user_id' });

module.exports = User;
