const { createUser } = require("../services/registerUserService");

const createUserController = async (req, res, next) => {
  const { name, email, password, role } = req.body;


  const result = await createUser({ name, email, password, role });

  console.log(result);

  if (!result) {
    return res.status(409).json({ message: 'user or name exists in database' });
  }

  return res.status(201).json({ message: 'User created' });
};

module.exports = { createUserController };
