const { createUser } = require("../services/registerUserService");

const createUserController = async (req, res, next) => {
  const { name, email, password, role } = req.body;


  const result = await createUser({ name, email, password, role });

  // console.log(result);

  if (!result) {
    return res.status(409).json({ message: 'Usuario já está cadastrado' });
  }

  return res.status(201).json({ message: 'Usuário criado com sucesso' });
};

module.exports = { createUserController };
