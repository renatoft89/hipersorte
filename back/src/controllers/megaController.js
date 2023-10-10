const serviceResultMega = require("../services/serviceMega");

const getResultMega = async (req, res, next) => {
  try {
    const result = await serviceResultMega();
    return res.status(200).json(result);
  } catch (error) {
    // Lida com erros aqui
    next(error);
  }
};

module.exports = { getResultMega };
