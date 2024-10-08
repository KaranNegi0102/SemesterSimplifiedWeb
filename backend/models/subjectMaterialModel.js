const mongoose = require("mongoose");

const subjectDocs = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { // Corrected field name
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["assignments", "notes", "books", "papers"],
      default: "notes",
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    uploadAt: {
      type: Date,
      default: Date.now,
    },
    pdfUrl: { 
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

const SubjectMaterial = mongoose.model("SubjectMaterial", subjectDocs);

module.exports = SubjectMaterial;
