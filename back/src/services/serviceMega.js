const serviceResultMega = async () => {

  const result = [
    { concurso: 1, resultado: [1, 2, 3, 4, 5, 6] },
    { concurso: 2, resultado: [7, 8, 9, 10, 11, 12] }
  ];

  return result;
};

module.exports={ serviceResultMega }

// const serieModels = require("../models/serieModels")

// const serieAservice = async (serie) => {
//   const result = await serieModels(serie);
//   return result;
// }

// module.exports = serieAservice;