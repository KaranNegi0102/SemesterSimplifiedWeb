const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const dbConnection = require("./connections/connection.js");
require("dotenv").config()
const SubjectMaterial = require("./models/subjectMaterialModel.js")
const cookieParser = require("cookie-parser")


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

const PORT = process.env.PORT;

const app = express();
app.use(cors({
  origin: true,
  credentials:true
}));

app.use(express.json());
app.use(cookieParser());

dbConnection();

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send(`<h1>This is default route</h1>`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

