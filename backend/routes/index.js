const express = require ('express');
const userRoute = require ("./userEndpoint.js");
const searchRoute = require("./searchEndpoint.js")

const router = express.Router();

router.use('/user',userRoute);
router.use('/search', searchRoute)

module.exports = router;