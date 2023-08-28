const S = require("sequelize");
const db = require("../db");

class Movies extends S.Model {}

Movies.init(
  {
    name: {
      type: S.STRING,
    },
    category: {
      type: S.STRING,
    },
    year: {
      type: S.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);




module.exports = Movies;