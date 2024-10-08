const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = dbConnection;
