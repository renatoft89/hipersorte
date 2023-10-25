const User = require('../database/models/user.model');
const { Op } = require('sequelize');


const createUser = async ({ name, email, password, role }) => {
  try {
    // Verificar se o email ou nome já existem
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email },
          { name },
        ],
      },
    });

    if (existingUser) {
      return false;
    }

    // Criar um novo usuário
    await User.create({ name, email, password, role });

  } catch (error) {
    throw error; // Ou trate o erro de acordo com suas necessidades
  }
};


module.exports = { createUser };