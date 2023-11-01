const express = require('express');
const createUserController = require('../../controllers/registerUserController');

const createUserRouter = express.Router();

createUserRouter.post('/user', createUserController.createUserController);


module.exports = createUserRouter;