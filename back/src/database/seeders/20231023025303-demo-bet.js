'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bets', [
      {
        user_id: 1, // Substitua pelo ID do usuário
        game_type: 'Mega-Sena',
        numbers: '1, 5, 9, 12, 15, 18, 20, 21, 22, 23, 24, 3, 8, 14, 25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bets', null, {});
  },
};
