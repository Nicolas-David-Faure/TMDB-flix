const express = require('express');

const router = express.Router();
const userRouter = require('./user')

const { Movies} = require('../models');

router.use('/user', userRouter)

module.exports = router;
