const express = require("express");
const router = express.Router();
const movieRouter = require('./movieFavorites')
const tvRouter = require('./tvFavorites')


router.use('/movie',movieRouter)
router.use('/tv',tvRouter)


module.exports = router



