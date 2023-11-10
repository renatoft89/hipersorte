const Bets = require('../database/models/bet.model');
const resultMega = require('../getApi/index'); 

const serviceResultMega = async () => {
  try {
    const resultados = await resultMega();
   
    
    const numbersString = JSON.stringify(resultados.mega);
    
    Bets.update({ numbers: numbersString }, {
      where: {
        game_type: 'mega'
      }
    });

  return resultados;
  
  } catch (error) {
    throw new Error('Erro interno do servidor');
  }
};

module.exports = {
  serviceResultMega,
};
