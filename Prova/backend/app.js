require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes/routes");
const express = require("express");
const app = express();

const PORT = 5000 || 5001;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) =>
    app.listen(PORT, console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

