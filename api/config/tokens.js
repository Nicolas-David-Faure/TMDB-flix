const jwt = require("jsonwebtoken");
const { SECRET } = require('./envs')

const generateToken =( payload )=>jwt.sign(payload , SECRET, { expiresIn: "2h"});

const validateToken =( token )=>{
  return jwt.verify(token, SECRET);
}

module.exports = {
    generateToken, 
    validateToken
}