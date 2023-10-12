const lotoModels=require("../models/lotoModels")

const serviceMega = async () => {
  const result = await lotoModels();
  return result;
}

module.exports = serviceMega;