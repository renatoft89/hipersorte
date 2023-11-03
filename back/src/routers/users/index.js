const express = require('express');
const createUserController = require('../../controllers/registerUserController');
const { validateUserData } = require('../../middlewares/user.middleware');

const createUserRouter = express.Router();

createUserRouter.post('/user',validateUserData, createUserController.createUserController);


module.exports = createUserRouter;