const xablau = require("../getApi/index");

const lotoModels = async () => {
  const result = await xablau()
  // console.log(result);
  return result;
};

module.exports = lotoModels