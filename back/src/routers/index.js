const express = require('express');

const router = express.Router();

const megaRouter = require('./megasena');
const registerRouter = require('./users/index');

router.use('/mega', megaRouter);
router.use('/register', registerRouter);

module.exports = router;