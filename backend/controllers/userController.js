// controllers/authController.js
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Ensure you have this installed
require("dotenv").config();

const registerUser = async (req, res) => {
  const { name, email, password, university, role } = req.body;

  console.log("Registering user:", name);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Added 'await'

    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      university: university || null,
      role: role || "student", // Optionally set a default role
    });

    // Optionally, create a JWT token upon registration
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Ensure this is set in your environment variables
      { expiresIn: "1h" }
    );

    res.status(201).json({
      status: "ok",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        university: user.university,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error while registering:", error);
    res.status(500).json({
      message: "Error while registering.",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const payload = {
        email: user.email,
        role: user.role,
        id: user._id,
      };

      console.log("payload of jwt token:", payload);

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: rememberMe ? "7d" : "1h", // Token expiry based on "Remember Me"
      });

      const options = {
        expires: new Date(
          Date.now() + (rememberMe ? 7 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000)
        ), // 7 days or 1 hour
      };

      res.cookie("token", token, options);
      res.status(200).json({ status: "ok", message: "Login successful." });
    } else {
      res.status(401).json({ message: "Incorrect password." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

module.exports = { registerUser, loginUser };
