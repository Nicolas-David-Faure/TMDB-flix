const { validateToken } = require('../config/tokens')

module.exports = {
  validateUser(req, res, next){
    const token = req.cookies.token;
    const payload  = validateToken(token);
    
    req.user = payload;
    if (payload) return next();
    res.sendStatus(401);
  }
}