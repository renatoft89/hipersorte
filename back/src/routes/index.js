const express = require('express');

const router = express.Router();

const megaRouter = require('./megasena');

router.use('/', megaRouter);

module.exports = router;