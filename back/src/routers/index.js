const express = require('express');

const router = express.Router();

const megaRouter = require('./megasena');
const registerRouter = require('./users/index');
const updateUserRouter = require('./users/index');
const authRouter = require('./users/index');

router.use('/mega', megaRouter);
router.use('/register', registerRouter.createUserRouter);
router.use('/update', updateUserRouter.updateUserRouter);
router.use('/login', authRouter.authUserRouter);

module.exports = router;