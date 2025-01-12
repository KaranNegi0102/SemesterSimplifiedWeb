const nodeMailer = require("nodemailer");

require("dotenv").config();

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Password:", process.env.EMAIL_PASSWORD);

//transporter ko configure
const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth:{
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendEmail = async(to, subject, text, html) => {
  try{
    const mailOptions = {
      from:"Semester Simplified",
      to,
      subject,
      text,
      html
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully", info.response);
    return info;
  }catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {sendEmail}