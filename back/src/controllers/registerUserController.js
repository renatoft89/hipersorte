const { createUser, updatedUser } = require("../services/registerUserService");
const hashPassword = require("../utils/hashMd5Password");

const createUserController = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const hash = hashPassword(password);

  const result = await createUser({ name, email, hash, role });

  // console.log(result);

  if (!result) {
    return res.status(409).json({ message: 'Usuario já está cadastrado' });
  }

  return res.status(201).json({ message: 'Usuário criado com sucesso' });
};

const updateUserController = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const hash = hashPassword(password);

  const { id } = req.params;

  const result = await updatedUser({ name, email, password: hash, role, id });

  if (!result) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
}

module.exports = { createUserController, updateUserController };
