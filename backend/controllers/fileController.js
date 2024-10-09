const SubjectMaterial = require("../models/subjectMaterialModel");
const User = require("../models/userModel");

const getData = async (req, res) => {
  const { course, subject } = req.query;

  try {
    const data = await SubjectMaterial.find({ course, subject }).populate(
      "uploadedBy",
      "name"
    ); // Populate with user name

    console.log(data);

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

const uploadFile = async (req, res) => {
  const { title, description, course, subject, category, url } = req.body;

  const userFromToken = req.user;

  //   console.log("user:", user);

  try {
    const newDoc = await SubjectMaterial.create({
      title,
      description,
      course,
      subject,
      category,
      uploadedBy: userFromToken.id,
      url,
    });

    const user = await User.findByIdAndUpdate(
      userFromToken.id,
      { $push: { materialUploaded: newDoc._id } },
      { new: true }
    );

    if (newDoc) {
      res.status(200).json({
        status: "success",
        message: "File information saved successfully!",
        data: newDoc,
      });
    }
  } catch (error) {
    console.error("Error saving document:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while saving the document.",
    });
  }
};

module.exports = { getData, uploadFile };
