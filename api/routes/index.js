const express = require('express');

const router = express.Router();
const userRouter = require('./user')
const movieRouter = require('./movies')
const favoritesRouter = require('./favorites/favorites')
const tvRouter = require('./tv')

router.use('/user', userRouter)
router.use('/movie',movieRouter)
router.use('/favorites', favoritesRouter)
router.use('/tv',tvRouter)

module.exports = router;
