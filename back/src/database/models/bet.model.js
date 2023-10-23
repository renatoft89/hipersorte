const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user.model'); // Importe o modelo User

const Bet = sequelize.define('Bets', {
  game_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numbers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Defina o relacionamento: Uma aposta pertence a um usuário
Bet.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Bet;