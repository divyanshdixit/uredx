const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

verificationEmailLogic = async (name, email) => {
    // create a token jwt:
    const token = await jwt.sign({ name, email }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });

    // config object :
    const config = {
      host: process.env.EMAIL_HOST,
      // service: 'gmail',
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    // transport object:
    const transporter = nodemailer.createTransport(config);

    const message = {
      from: "amit@theunpadh.com",
      to: email,
      subject: "Verify email- Unpadh",
      // we will use mailgen to generate good looking mail:
      html: `To verify this email by clicking <a href=http://localhost:8080/api/teachers/verifyemail/${token}> here </a>`,
    };

    const messageSent = await transporter.sendMail(message);
    return messageSent;
  }

  module.exports = verificationEmailLogic;