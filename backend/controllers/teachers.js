const Teacher = require("../models/teachers");
const Course = require("../models/courses");
const Topic = require('../models/topics');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const verificationEmailLogic = require("../utils/sendMail");
const uploadVideoFileToS3 = require("./uploadS3");

class TeacherController {
  static fileupload = async (req, res) => {
    console.log(req.file, req.files);
    try {
      const resultFiles = await uploadVideoFileToS3.uploadSingleFileToS3(
        req.files[0]
      );
      console.log(resultFiles);
      res.send({ message: "success!", result: resultFiles });
    } catch (err) {
      res.send({ message: "wrong!", err: err.message });
    }
  };

  static multiFileuploads = async (req, res, singleUpload) => {
    try {
      const resultFiles = await uploadVideoFileToS3.uploadMultiVideoFilesToS3(
        req.files
      );
      res.send({ message: "success!", result: resultFiles });
    } catch (err) {
      res.send({ message: "wrong!", err: err.message });
    }
  };

  static getFile = async (req, res) => {
    try {
      const resultFiles = await uploadVideoFileToS3.getUploadedVideo(urlid);
      console.log(resultFiles);
      res.send({ message: "success!" });
    } catch (err) {
      res.send({ message: "wrong!", err: err.message });
    }
  };

  static registerTeacher = async (req, res) => {
    try {
      const { name, email, mobile, avatar, password, cpassword } = req.body;

      // check if user's email is already exist:
      const isTeacherEmailExists = await Teacher.findOne({ email });
      if (isTeacherEmailExists) {
        return res.status(400).json({ message: "Email already exists!" });
      }

      // check if password and confirm password matched:
      if (password !== cpassword) {
        console.log("passwords do not match");
        return res
          .status(400)
          .json({ message: "Passwords do not match", passwordMismatch: true });
      } else {
        // if password and cpassword matched then hash password:
        // hash password to protect route:
        const hashPassword = await bcrypt.hash(
          password,
          Number(process.env.SALT_ROUNDS)
        );
        const newTeacher = new Teacher({
          name,
          email,
          mobile,
          password: hashPassword,
        });
        await newTeacher.save();

        // send verify email to given email address:

        const messageSent = await verificationEmailLogic(name, email);
        if (messageSent.messageId) {
          res.status(201).json({
            message:
              "User created successfully! Please check your email to verify the account!",
            value: newTeacher,
            EmailSent: true,
            info: messageSent.messageId,
          });
        } else {
          res.status(201).json({
            message: "User created successfully!",
            EmailSent: false,
            emailMessage:
              "Verification email can not be sent! Please click here to send verification email!",
            value: newTeacher,
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error signing up!" });
    }
  };

  // const teacherRegister = async (req, res) => {
  //   try {
  //     console.log("teacher added");

  //     //   // //  creating user so that validation will  Worker..
  //     //   //   const myUser = await User.create({ name, email, mobile, password, confirm_password });

  //     //   OTP = Otpgenerator;

  //     res.status(201).json({ otp: true });
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //     res.status(500).json({ message: "Internal server error", success: false });
  //   }
  // };

  static verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
      const verification = await jwt.verify(token, process.env.SECRET_KEY);
      if (verification) {
        res.status(200).json({
          message: "Email verified!",
        });
      } else {
        res.status(400).json({
          message: "Email not verified as link may be wrong or expires!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  };

  static resendVerificationEmail = async (req, res) => {
    try {
      const { name, email } = req.body;
      const messageSent = await verificationEmailLogic(name, email);
      if (messageSent.messageId) {
        res.status(200).json({
          message: "Verification mail has been sent, Please check your email!",
        });
      } else {
        res.status(400).json({
          message: "Email can not be send!",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  };

  static loginTeacher = async (req, res) => {
    try {
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email });

      // if don't find the teacher
      if (!teacher) {
        return res
          .status(401)
          .json({ error: "Either email id or password is incorrect!" });
      }

      const isPasswordValid = await bcrypt.compare(password, teacher.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ error: "Either email id or password is incorrect!" });
      }

      // if username and password is correct, then we'll make token:
      const jwtToken = jwt.sign(
        { teacherId: teacher._id },
        process.env.SECRET_KEY,
        { expiresIn: "1hr" }
      );

      const refreshToken = jwt.sign(
        { teacherId: teacher._id },
        process.env.REFRESH_SECRET_KEY,
        { expiresIn: "5hr" }
      );

      res.cookie("jwttoken", jwtToken, {
        httpOnly: true,
        SameSite: "strict",
        expires: new Date(Date.now() + 60 * 60 * 1000), // 1hr
      });

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        SameSite: "strict",
        expires: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5hr
      });
      // on client side
      // sessionStorage.setItem('jwtToken', jwtToken);

      res
        .status(200)
        .json({
          message: "Login successful!",
          success: "Ok",
          jwtToken,
          refreshToken,
        });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static createCourse = async (req, res) => {
    try {
      const {
        cName,
        cDesc,
        category,
        subCategory,
        medium,
        cModerate,
        price,
        sell_price,
        duration,
        preview_video,
        teacherId,
      } = req.body;

      // check for course name for a teacher: it should not repeat:
      const isTeacherCourseExists = await Course.findOne({
        teacher: teacherId,
        name: cName,
      });
      if (isTeacherCourseExists) {
        return res
          .status(401)
          .json({ message: "This course is already enrolled!" });
      } else {
        // so we enroll the course
        const newCourseDetails = await new Course({
          name: cName,
          description: cDesc,
          category, 
          subCategory, 
          medium,
          price,
          sell_price,
          duration,
          cModerate,
          preview_video,
          teacher: teacherId
        }).save();

        // update the course field in teacher collection:
        await Teacher.findOneAndUpdate({_id: teacherId}, {$push: {course:  newCourseDetails._id}});

        res.status(201).json({
          message: 'Course Details has been created!',
          result: newCourseDetails
        });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static createTopic = async(req, res) => {
    try{
      const {name, description, quiz, courseId} = req.body;
      let videourl = '';
      
      if(!req.file){
        const resultFiles = await uploadVideoFileToS3.uploadSingleFileToS3(
          req.file
        );
        videourl = resultFiles

        const newTopic = await new Topic({
          topic_name: name,
          topic_desc: description,
          topic_video: videourl.url,
          // topic_quiz: quiz, // may we have to change 
          course: courseId
        }).save();
  
        // update course schema - insert topics objectId in course table:
        await Course.findOneAndUpdate({_id: courseId}, {$push: {topics: newTopic._id}})

        res.status(201).json({message: 'Topic has been created!', result: newTopic})
      }else {
        return res.status(400).json({message:"Topic Video is manadatory!"})
      }

      
      // at the time of get request 
      // await Course.findOne({_id: courseId}).populate('topics').exec();
      
    }catch(err){
      res.status(500).json({message: 'Something went wrong!', error: err.message})
    }
  }

  static forgetPassword = async (req, res) => {
    
  };

  static updateCourse = async (req, res) => {
    try{
      const id = req.params.id;
      const updateCourse = await Course.findOneAndUpdate({_id:id}, {$set: req.body});
      res.status(200).json({
        message: 'Record updated successfully!', result: updateCourse
      })
    }catch(err){
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static updateTopic = async (req, res) => {
    try{
      const id = req.params.topicid;
      const updateTopic = await Topic.findOneAndUpdate({_id:id}, {$set: {topic_name:req.body.name, topic_desc:req.body.description}});
      res.status(200).json({
        message: 'Topic updated successfully!', result: updateTopic
      })
    }catch(err){
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static deleteCourse = async (req, res) => {
    try{
      const id = req.params.courseid;
      const tchrid = req.params.teacherid;
      const deleteCourse = await Course.findOneAndDelete({_id:id});
      await Teacher.findOneAndUpdate({_id: tchrid}, {$pull: {course: id}})

      res.status(200).json({
        message: 'Course deleted successfully!', result: deleteCourse
      })
    }catch(err){
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static deleteTopic = async (req, res) => {
    try{
      const topicId= req.params.topicid;
      const courseId= req.params.courseid;
      const deleteTopic = await Topic.findOneAndDelete({_id:topicId});
      await Course.findOneAndUpdate({_id: courseId}, {$pull: {topics: topicId}})
      res.status(200).json({
        message: 'Topic is deleted successfully!', result: deleteTopic
      })
    }catch(err){
      res
        .status(500)
        .json({ message: "Something went wrong!", reason: err.message });
    }
  };

  static editTeacherProfile = async (req, res) => {};

  // static refreshToken = async (req, res) => {};

  static getAllTeachers = async (req, res) => {
    try {
      console.log("fetch all teachers");
      res.status(200).json({ message: "get all teachers" });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Internal server error",
          success: false,
          reason: error.message,
        });
    }
  };
}

module.exports = TeacherController;
