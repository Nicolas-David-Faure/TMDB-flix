
const express = require("express");
const router = express.Router();
const { User , Movie } = require('../models');

const { validateUser } = require('../middleware/auth')
const { getAll , register , login , logout , getMe , secret } = require('../controllers/userControllers')

const cookieParser = require('cookie-parser')

router.use(cookieParser())

router.get('/all', getAll)

router.post("/register",register );

router.post('/login', login)

router.post('/logout',logout)

router.get("/me", validateUser, getMe);

router.get("/secret", validateUser,secret);


router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;