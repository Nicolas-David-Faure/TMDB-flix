const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const User = require("./User");
const Movie = require("./Movie")
const TV = require("./Tv")
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

const TvUser = sequelize.define('tv_user', {
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
  tvId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

User.belongsToMany(TV, {through: TvUser})
TV.belongsToMany(User, {through: TvUser})

TvUser.belongsTo(User)
TvUser.belongsTo(TV)



User.belongsToMany(Movie, {through: MovieUser})
Movie.belongsToMany(User, {through: MovieUser})

MovieUser.belongsTo(User)
MovieUser.belongsTo(Movie)

module.exports = {User ,Movie , MovieUser , TvUser , TV};