const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const Otpgenerator = require("./Otpgenerator");
const User = require("./models/teachers");
const teacherRoutes = require('./routes/teachers');
const errorMiddleware = require("./middlewares/error");
require('dotenv').config();
require('./utils/db');



const secretKey = "unpadhsecretkeyishere";

// Global variable .....
let signupdata;
let myemail;
let OTP;

const app = express();
const PORT = 8001;

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
};
app.use(cors());

app.use(bodyParser.json());

app.use(cookieParser());

// load routes:
app.use('/api/teachers', teacherRoutes);

// express error handling middleware for handling multer errors:
app.use(errorMiddleware);

app.post("/login", async (req, res) => {
  try {
    console.log("running manual login ");
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.password === password) {
        const token = jwt.sign({ email: existingUser.email }, secretKey, {
          expiresIn: "1d",
        });

        let options = {
          maxAge: 1000 * 60 * 15, // expire after 15 minutes
          httpOnly: true, // Cookie will not be exposed to client side code
          // sameSite: "none", // If client and server origins are different
        };

        res.cookie("jwttoken", token, options);

        res
          .status(201)
          .json({ message: "User created successfully", jwt: token });
      } else {
        res
          .status(400)
          .json({ message: "wrong user credientials", success: false });
      }
    } else {
      res
        .status(400)
        .json({ message: "wrong user credientials", success: false });
    }
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
});

app.post("/googlesubmit", async (req, res) => {
  try {
    console.log("running by google login ");

    const { email, password } = req.body;

    console.log("data from google ", req.body);

    const token = jwt.sign({ email }, secretKey, { expiresIn: "1d" });

    res.status(201).json({ message: "User created successfully", jwt: token });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
});

// app.post("/signup", );

app.post("/signupConfrom", async (req, res) => {
  try {
    const concatenatedInp = Object.values(req.body).join("");

    const isEqual = concatenatedInp === OTP;

    console.log(isEqual);

    if (isEqual) {
      const newuser = new User(signupdata);
      console.log("this is my signup data ", signupdata);

      await newuser.save();

      return res.status(201).send({ otp: true });
    }
    return res.status(500).send({ otpflase: true });
  } catch (error) {
    console.log("the error while saving user : ", error);
  }
});

app.post("/forgotpass", async (req, res) => {
  const { email } = req.body;
  console.log("api came here", email);
  myemail = email;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rohitkafle360@gmail.com",
        pass: "msos gzym kufs bwld",
      },
    });

    OTP = Otpgenerator;

    let mailOptions = {
      from: "rohitkafle360@gmail.com",
      to: email,
      subject: "Test Email",
      text: `Your Otp is : ${OTP}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent:" + info.response);
      }
    });

    res
      .status(200)
      .send({ message: "you have received an email", emailfound: true });
  } else {
    return res
      .status(500)
      .json({ message: "Internal server error", emailnotfound: true });
  }
});

app.post("/passwordConfrom", async (req, res) => {
  try {
    const concatenatedInp = Object.values(req.body).join("");

    const isEqual = concatenatedInp === OTP;
    console.log(OTP, "otp in email :", concatenatedInp);

    console.log(isEqual);

    if (isEqual) {
      return res.status(201).send({ otp: true });
    }
    return res.status(500).send({ otpflase: true });
  } catch (error) {
    console.log("the error while saving user : ", error);
  }
});

app.post("/resetpassword", async (req, res) => {
  myemail = "rohitkafle360@gmail.com";
  const userData = await User.findOne({ email: myemail }); // Implement this function

  // Assuming userData contains the user's password and confirm password fields
  const newPassword = req.body.password;
  const newConfirmPassword = req.body.confrompassword;

  // Update the password and confirm password fields in userData
  userData.password = newPassword;
  userData.confirm_password = newConfirmPassword;

  await userData.save();

  res
    .status(200)
    .json({ message: "Password updated successfully", password: true });
});

app.get("/verifycookie", (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Extract JWT token from Authorization header
  if (!token)
    return res.status(401).send({ user: false, message: "No token provided." });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ user: false, message: "Failed to authenticate token." });
    res.send({ user: true, message: "User authenticated successfully." });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

