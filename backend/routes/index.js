const express = require ('express');
const userRoute = require ("../routes/userRoute");

const router = express.Router();

router.use('/user',userRoute);

module.exports = router;