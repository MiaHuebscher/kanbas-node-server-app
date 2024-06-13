import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    title: { type: String, required: true},
    course: { type: String, required: true},
    due: String,
    availableFrom: String,
    availableUntil: String,
    questions: String,
    points: String,
    quizType: {
        type: String, 
        enum: ["graded quiz", "practice quiz", "graded survey", "ungraded survey"],
        default: "graded quiz" 
    },
    assignmentGroup: {
        type: String, 
        enum: ["assignments", "quizzes", "exams", "project"],
        default: "quizzes" 
    },
    instructions: String,
    shuffleAnswers: {
        type: Boolean, 
        default: true 
    },
    timeLimit: {
        type: Boolean, 
        default: true
    },
    minutes: String,
    allowMultipleAttempts: {
        type: Boolean, 
        default: false
    },
    assignTo: String
  },
  { collection: "quizzes" }
);
export default quizzesSchema;
