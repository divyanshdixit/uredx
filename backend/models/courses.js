const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Course Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  subCategory: {
    type: String,
    required: [true, "Sub Category is required"],
  },
  moderate:{
    type: String,
    // required: [true, "Course Moderate is required"],
  },
  medium: {
    type: String,
    required: [true, "Medium is required"],
  },
  preview_video: { // 1st topic shoudl be previw
    type: Buffer,
    // required: [true, "Preview is required"],
  },
  price: {
    type: Number,
  },
  sell_price: {
    type: Number,
  },
  duration: {
    type: String,
  },
  topics: [
    { 
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    }
  ],
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    // required: true
  }
});

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
