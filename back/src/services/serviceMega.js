const resultApi = require("../getApi");
const { saveNumModels, getAllMega }=require("../models/lotoModels")

const serviceMega = async () => {
  const result = await resultApi();
  
  saveNumModels(result);

  const numMega = await getAllMega();

  return numMega
}

module.exports = serviceMega;