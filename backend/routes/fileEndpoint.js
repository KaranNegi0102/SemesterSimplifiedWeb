const express = require("express");
const router = express.Router();

const { getData, uploadFile } = require("../controllers/fileController");
const  {authentication}  = require("../middlewares/auth");

router.get("/search", getData);
router.post('/upload', authentication, uploadFile)

module.exports = router;
