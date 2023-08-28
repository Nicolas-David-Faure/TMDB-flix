const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
    },
    lastName: {
      type: S.STRING,
    },
    age: {
      type: S.INTEGER,
    },
    saludo: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);



User.beforeCreate((user) => {
  user.saludo = `Hola mi nombre es ${user.name} y mi edad es ${user.age}`;
});

module.exports = User;
