const User = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, university } = req.body;

    console.log(name, email, password);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({
        message: "user already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      university: university || null,
    });
    res.json({ status: "ok", user: user });
  } catch (error) {
    res.status(500).json({
      message: "Error while registering",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      res.json({
        message: "Na Hove User",
      });
    } else {
      if (user.password === password) {
        res.json({
          message: "User haigo aur password bhi sahi haigo",
        });
      } else {
        res.json({
          message: "User haigo par password galat daaalo betichod ke",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginUser, registerUser };
