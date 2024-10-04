const express = require("express");
const cors = require("cors")
const routes = require ("./routes/index.js");
const PORT = 5000;

const app = express();
app.use(cors())

app.use(express.json());


app.use("/api/v1",routes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
