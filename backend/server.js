const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const dbConnection = require("./connections/connection.js");
require("dotenv").config()

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json());

dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send(`<h1>This is default route</h1>`);
});
