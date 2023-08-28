const { Model , DataTypes } = require('sequelize');
const sequelize = require('../db')
const bcrypt = require('bcrypt')
class User extends Model {
 async validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}

User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user"
    }
  );
  User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync(8);
    user.salt = salt;  
    console.log(user.password)
    return bcrypt.hash(user.password, user.salt).then((hash) => {
      user.password = hash;
    });
  });
  
 
  module.exports = User;