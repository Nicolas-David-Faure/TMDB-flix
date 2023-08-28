const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./db");
const models = require("./models");
const cors= require('cors')

app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3002, () => {
    console.log("servidor levantado en el puerto 3002");
  });
});
