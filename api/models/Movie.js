const S = require("sequelize");
const db = require("../db");

class Movie extends S.Model {}

Movie.init(
  {
    title: {
      type: S.STRING,
      allowNull: false
    },
    id:{
      type:S.INTEGER,
      primaryKey:true,
      allowNull:false
    }
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);




module.exports = Movie;