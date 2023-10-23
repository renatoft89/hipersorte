const express = require('express');

const router = express.Router();

const megaRouter = require('./megasena');

router.use('/mega', megaRouter);

module.exports = router;