const express = require("express");

const router = express.Router();

const { loginUser, registerUser, getUserInfo, updateUser } = require("../controllers/userController.js");
const  {authentication}  = require("../middlewares/auth");


router.use(express.json());

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get('/getInfo', authentication, getUserInfo)
router.post('/updateUser', authentication, updateUser)

module.exports = router;
