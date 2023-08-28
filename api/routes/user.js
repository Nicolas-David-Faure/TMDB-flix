
const express = require("express");
const router = express.Router();
const {User, Movies} = require('../models');

const { generateToken } = require('../config/tokens')
const { validateUser } = require('../middleware/auth')

const cookieParser = require('cookie-parser')

router.use(cookieParser())

router.get('/all', (req , res)=>{
  User.findAll()
  .then(users=>res.send(users))
  .catch(err=> err)
})

router.post("/register", (req, res, next) => {
  const body = req.body;
  console.log('post-->', body)

  
  User.create(body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

router.post('/login',(req,res)=>{
  const{email,password}=req.body

  User.findOne({
    where:{email}
    })
    .then(user=>{
      if(!user)res.sendStatus(401)
      user.validatePassword(password)
      .then(isValidate=>{
        if(!isValidate) res.sendStatus(401)
        else{
          const { email , lastname , name } = user;
          const token = generateToken( { email , lastname , name })
          
          res.cookie("token", token);

          res.send(user)}
         })
      })
      .catch(err=>{
        console.error(err)
      })
    
  })
  router.post('/logout',(req, res)=>{
    res.clearCookie('token')
    res.sendStatus(204)
  })
  router.get("/me", validateUser, (req, res) => {
    res.send(req.user);
  });

  router.get("/secret", validateUser,async (req, res, next) => {

      res.send(req.user)
  });
/*
  ALL YOUR ROUTES HERE!
*/
// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;