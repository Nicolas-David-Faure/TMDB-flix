const { User , Movies} = require('../models')
const { generateToken } = require('../config/tokens')

const getAll = (req , res)=>{
  User.findAll()
  .then(users=>res.send(users))
  .catch(err=> err)
}

const register = (req, res, next) => {
  const body = req.body;

  User.create(body)
    .then((user) => {
      res.send(user);
    })
    .catch(err=>console.error(err));
}

const login = (req,res)=>{
  const{email,password}=req.body
  User.findOne({
    where:{email},
 
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
    
  }

const logout = (req, res)=>{
  res.clearCookie('token')
  res.sendStatus(204)
}

const getMe = (req, res) => {
  res.send(req.user);
}

const secret = async (req, res, next) => {
  res.send(req.user)
}

module.exports = {
  getAll,
  register,
  login,
  logout,
  getMe,
  secret
}