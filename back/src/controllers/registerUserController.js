const createUserService = require("../services/createUserService");

const createUserController = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const hashPassword = hashGenerator(password);

  const result = await createUser({ name, email, password: hashPassword, role });

  if (!result) {
    return res.status(409).json({ message: 'user or name exists in database' });
  }

  return res.status(201).json({ message: 'ok' });
};

module.exports = { createUserController };
