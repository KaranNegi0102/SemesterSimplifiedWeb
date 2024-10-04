const express = require ('express');
const userRoute = require ("../routes/userRoute.js");

const router = express.Router();

router.use('/user',userRoute);

module.exports = router;