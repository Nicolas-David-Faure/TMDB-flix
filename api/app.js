const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./db");
const models = require("./models");
const envs = require("./config/envs");
const cors= require('cors')

app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("Db connected");
  app.listen(envs.PORT, () => {
    console.log(`Server listening at port ${envs.PORT}`);
  });
});
