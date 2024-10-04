const {User} = require ("../models/userModel");
const registerUser = async (req, res) => {
  try {
    const { name, email, password, university } = req.body;

    res.json({"message":"register successful"});
  }
  catch(error){
    console.log(error);
  }  
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    res.json({"message":"login successful"});

  } catch (error) {
    console.log(error);
  }
};


module.exports = {loginUser,registerUser};

