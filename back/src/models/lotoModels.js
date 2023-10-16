const connection = require('./connection');

const saveNumModels = async (data) => {
  const saveData = { numero1: data.mega[0], numero2: data.mega[1], numero3: data.mega[2], numero4: data.mega[3], numero5: data.mega[4], numero6: data.mega[5] }; 

  console.log({'saveNumModels': saveData});

  const query = 'UPDATE mega SET numero_1 = ?, numero_2 = ?, numero_3 = ?, numero_4 = ?, numero_5 = ?, numero_6 = ? WHERE id = 1';

  const [result] = await connection.query(query, [saveData.numero1, saveData.numero2, saveData.numero3, saveData.numero4, saveData.numero5, saveData.numero6]);
  
};


const getAllMega = async () => {
  const query = "SELECT * FROM mega";
  const [result] = await connection.query(query);

  return result;
};

module.exports = { saveNumModels, getAllMega };