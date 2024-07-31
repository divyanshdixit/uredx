const mongoose = require("mongoose");
const QuizSchema = require('./quizs');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic_name: {
    type: String,
    // required: [true, "Topic is required"],
  },
  topic_desc: {
    type: String,
    // required: [true, "Topic is required"],
  },
  topic_video: {
    type: String,
    // required: [true, "Topic is required"],
  },
  // topic_quiz: {
  //   type: String,
  //   // type: QuizSchema,
  // },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    // required: true
  }
});

const TopicModel = mongoose.model("Topic", topicSchema);

module.exports = TopicModel;