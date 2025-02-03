const { serviceResultLoteria } = require("../services/serviceLoteria");

const getResultLoteria = async (req, res, next) => {
  try {
    const { tipo } = req.params; // Agora pega o tipo corretamente da URL

    if (!['mega', 'lotofacil'].includes(tipo)) {
      return res.status(400).json({ error: "Tipo de loteria inválido. Use 'mega' ou 'lotofacil'." });
    }

    const result = await serviceResultLoteria(tipo);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getResultLoteria };
