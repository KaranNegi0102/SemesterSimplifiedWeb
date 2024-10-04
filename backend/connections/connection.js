const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://anuraggo3l07:semestersimplified@semestersimplified.lcwyu.mongodb.net/SS_Databases"
    )
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = dbConnection;
