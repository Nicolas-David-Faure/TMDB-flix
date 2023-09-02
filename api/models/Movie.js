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
    },
    genre_ids:{
      type: S.ARRAY(S.INTEGER),
      allowNull: false
    },
    backdrop_path:{
      type:S.STRING,
    },
    overview:{
      type: S.TEXT,
      allowNull: false
    },
    original_title:{
      type: S.STRING,
      allowNull: false
    },
    original_language:{
      type: S.STRING,
      allowNull: false
    },
    popularity:{
      type: S.DECIMAL,
      allowNull: false
    },
    release_date:{
      type: S.STRING,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);



module.exports = Movie;