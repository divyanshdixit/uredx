const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,

    validate: {
      validator: function (value) {
        // Basic email format validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],

    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Please enter a valid mobile number",
    },
  },
  avatar: {
    type: Buffer,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  course: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    }
  ]
});

const TeacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = TeacherModel;
