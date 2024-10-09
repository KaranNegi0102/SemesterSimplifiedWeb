const express = require("express");
const router = express.Router();

const { getData, uploadFile } = require("../controllers/fileController");

router.get("/search", getData);
router.post('/upload', uploadFile)

module.exports = router;
