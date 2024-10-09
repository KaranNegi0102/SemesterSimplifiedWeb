const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const dbConnection = require("./connections/connection.js");
require("dotenv").config()
const SubjectMaterial = require("./models/subjectMaterialModel.js")


//dummy subject material data
const newMaterial = new SubjectMaterial({
  title: "Sample Book",
  description: "Sample Description",
  course: "B.Tech",
  subject: "Data Structures and Algorithms",
  uploadedBy: "6701af3c564d2c2e08697bdf",
  url: "www.pdfurl.com",
  category: "notes"
});

// newMaterial.save()
//   .then(() => console.log("TextBook saved successfully"))
//   .catch(err => console.error("Error saving TextBook:", err));


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
