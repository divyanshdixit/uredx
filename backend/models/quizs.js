const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quiz_que: {
        type: String,
        required: true
    },
    quiz_hint: {
        type: String,
    },
    is_multiple: {
        type: Boolean,
    },
    quiz_ans: {
        type: String
    }
})

module.exports = QuizSchema;