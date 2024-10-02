const express = require("express");
const cors = require("cors")

const PORT = 5000;

const app = express();
app.use(cors())


const books = [
  {
    id: 1,
    title: "compiler design",
    fileUrl:
      "https://notestoconnect.wordpress.com/wp-content/uploads/2021/02/compiler-design.pdf",
  },
  {
    id: 2,
    title: "web tech",
    fileUrl:
      "https://aktu.ac.in/pdf/syllabus/syllabus2122/B.Tech%202nd%20Year%20CSAI_CSML_CSDS_CSIOT_2021-22%200709.pdf%7D",
  },
  {
    id: 2,
    title: "os",
    fileUrl:
      "https://aktu.ac.in/pdf/syllabus/syllabus2122/B.Tech%202nd%20Year%20CSAI_CSML_CSDS_CSIOT_2021-22%200709.pdf%7D",
  },
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/books", (req, res) => {
  res.json(books);
  console.log("req received")
  
});
