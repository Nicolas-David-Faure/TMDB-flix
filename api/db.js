const { Sequelize } = require("sequelize");

const db = new Sequelize("tmdbflix", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
