const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const User = require("./User");
const Movie = require("./Movie")

// Jobs.hasMany(Users)
// Users.belongsTo(Jobs)
const MovieUser = sequelize.define('movie_user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  movieId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

User.belongsToMany(Movie, {through: MovieUser})
Movie.belongsToMany(User, {through: MovieUser})

MovieUser.belongsTo(User)
MovieUser.belongsTo(Movie)

module.exports = {User ,Movie , MovieUser};