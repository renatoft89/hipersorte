const express = require('express');
const createUserController = require('../../controllers/registerUserController');

const createUserRouter = express.Router();

createUserRouter.post('/register', createUserController.createUserController);


module.exports = createUserRouter;