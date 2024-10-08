const SubjectMaterial = require("../models/subjectMaterialModel");
const express = require("express");
const router = express.Router();

const getData = async (req, res) => {
  const { course, subject } = req.query;

  try {
    const data = await SubjectMaterial.find({ course, subject }).populate(
      "uploadedBy",
      "name"
    ); // Populate with user name
    

    // Step 2: Map the result to replace uploadedBy with user name
    const responseData = data.map((doc) => {
      return {
        ...doc.toObject(), // Convert Mongoose Document to plain JavaScript object
        uploadedBy: doc.uploadedBy.name, // Replace ObjectId with user name
      };
    });

    res.json(responseData); // Send the modified data in the response
  } catch (error) {
    res.json({
      message: "Something went Wrong",
    });
  }
};

router.get("/getDocs", getData);

module.exports = router;
