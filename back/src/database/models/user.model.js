const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa as configurações do Sequelize

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  modelName: 'User',
  tableName: 'Users',
});

User.associate = function(models) {
  // Defina o relacionamento: Um usuário tem muitas apostas
  User.hasMany(models.Bets, { foreignKey: 'user_id' });
};

module.exports = User;
