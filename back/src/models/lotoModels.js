const connection = require('./connection');


const saveNumModels = async (data) => {
  const { mega } = data;
  const [numero1, numero2, numero3, numero4, numero5, numero6] = mega;

  const query = `
    UPDATE mega
    SET numero_1 = ?,
        numero_2 = ?,
        numero_3 = ?,
        numero_4 = ?,
        numero_5 = ?,
        numero_6 = ?
    WHERE id = 1
  `;

  try {
    const [result] = await connection.query(query, [numero1, numero2, numero3, numero4, numero5, numero6]);
    return  result;
  } catch (error) {
    console.error('Erro ao executar a consulta SQL:', error);
  }
};


const getAllMega = async () => {
  const query = "SELECT * FROM mega";
  const [result] = await connection.query(query);

  return result;
};

module.exports = { saveNumModels, getAllMega };