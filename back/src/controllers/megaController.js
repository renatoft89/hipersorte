const { serviceResultMega } = require("../services/serviceMega");

const getResultMega = async (_req, res, next) => {
  try {
    const result = await serviceResultMega();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getResultMega };
