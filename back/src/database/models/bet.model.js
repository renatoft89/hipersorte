const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model'); // Importe o modelo User

const Bet = sequelize.define('Bet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  game_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numbers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Defina o relacionamento: Uma aposta pertence a um usuário
Bet.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Bet;
