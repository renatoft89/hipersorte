const Bet = require('../database/models/bet.model');
const resultMega = require('../getApi/index'); 

const serviceResultMega = async () => {
    try {
      const resultados = await resultMega();

      
      await Bet.update(
        { result: resultados },
        { where: { game_type: 'Mega-Sena' } },
      );
      return resultados;

    } catch (error) {
      throw new Error('Erro interno do servidor');
    }
  };
  
  module.exports = {
    serviceResultMega,
  };