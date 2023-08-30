const express = require('express');

const router = express.Router();
const userRouter = require('./user')
const movieRouter = require('./movies')

router.use('/user', userRouter)

router.use('/movie',movieRouter)


module.exports = router;
