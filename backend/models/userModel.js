const mongoose = require("mongoose"); // Import mongoose
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    university: { type: String, default: "" }, // Required field for university
    materialUploaded: [
      { type: mongoose.Schema.Types.ObjectId, ref: "SubjectMaterial" },
    ],
    role: {
      type: String,
      enum: ["student", "admin"],
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const User = mongoose.model("User", userSchema); // Best practice is to use singular model names

module.exports = User;
