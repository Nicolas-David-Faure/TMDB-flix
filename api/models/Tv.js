const S = require("sequelize");
const db = require("../db");

class TV extends S.Model {}

TV.init(
  {
    name: {
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
    original_name:{
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
    first_air_date:{
      type: S.STRING,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: "tv",
  }
);



module.exports = TV;