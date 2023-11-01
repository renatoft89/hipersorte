const resultMega = require('../getApi/index'); 

const serviceResultMega = async () => {
    try {
      const resultados = await resultMega();
  
      return resultados;

    } catch (error) {
      throw new Error('Erro interno do servidor');
    }
  };
  
  module.exports = {
    serviceResultMega,
  };