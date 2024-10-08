const express = require("express");

const router = express.Router();

const { loginUser, registerUser } = require("../controllers/userController.js");

router.use(express.json());

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
