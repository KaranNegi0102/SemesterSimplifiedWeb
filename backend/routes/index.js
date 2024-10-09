const express = require ('express');
const userRoute = require ("./userEndpoint.js");
const searchRoute = require("./fileEndpoint.js")

const router = express.Router();

router.use('/user',userRoute);
router.use('/documents', searchRoute)

module.exports = router;