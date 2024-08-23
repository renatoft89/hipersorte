const express = require('express');
const megaController = require('../../controllers/megaController');

const megaRouter = express.Router();

megaRouter.get('/', megaController.getResultMega);


module.exports = megaRouter;