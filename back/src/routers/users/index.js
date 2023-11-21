const express = require('express');
const { createUserController, updateUserController} = require('../../controllers/registerUserController');
const { validateUserData } = require('../../middlewares/user.middleware');

const createUserRouter = express.Router();
const updateUserRouter = express.Router();


createUserRouter.post('/user',validateUserData, createUserController)
updateUserRouter.put('/user/:id',validateUserData, updateUserController);


module.exports = { createUserRouter, updateUserRouter } ;