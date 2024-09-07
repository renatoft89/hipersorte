const resultMega = require('../getApi/index'); 
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const serviceResultMega = async () => {
  try {
    const resultados = await resultMega();    
    const numbersString = JSON.stringify(resultados.mega);

    // Verifica se já existem registros do tipo 'mega'
    const existingBets = await prisma.bet.findMany({
      where: {
        game_type: 'mega'
      }
    });

    if (existingBets.length === 0) {
      // Se não houver registros, insere novos dados
      await prisma.bet.create({
        data: {
          game_type: 'mega',
          numbers: numbersString,
          // Defina user_id conforme necessário
          user_id: 1 // Exemplo, ajuste conforme necessário
        }
      });
    } else {
      // Se houver registros, atualiza os números
      await prisma.bet.updateMany({
        where: {
          game_type: 'mega'
        },
        data: {
          numbers: numbersString
        }
      });
    }

    return resultados;
  
  } catch (error) {
    throw new Error('Erro interno do servidor');
  }
};

module.exports = {
  serviceResultMega,
};
