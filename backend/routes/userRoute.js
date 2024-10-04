const express = require ("express");

const {loginUser , registerUser} = require ("../controllers/userController.js");

const router = express.Router();

router.use(express.json())

router.post("/login",loginUser);
router.post("/register",registerUser);

module.exports = router;


