require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./src/routes/routes');
const databaseConnection = require("./src/config/dbConnection");

databaseConnection();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});