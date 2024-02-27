// const Bets = require('../database/models/bet.model');
const resultMega = require('../getApi/index'); 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const serviceResultMega = async () => {
  try {
    const resultados = await resultMega();
    
    const numbersString = JSON.stringify(resultados.mega);

    // Atualiza os números das apostas do tipo 'mega'
    await prisma.bets.updateMany({
      where: {
        game_type: 'mega'
      },
      data: {
        numbers: numbersString
      }
    });

    return resultados;
  
  } catch (error) {
    throw new Error('Erro interno do servidor');
  }
};

module.exports = serviceResultMega;


module.exports = {
  serviceResultMega,
};
