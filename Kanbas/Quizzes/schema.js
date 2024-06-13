import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    title: { type: String, required: true},
    course: { type: String, required: true},
    due: Date,
    availableFrom: Date,
    availableUntil: Date,
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
        type: String, 
        enum: ["true", "false"],
        default: "true" 
    },
    timeLimit: {
        type: String, 
        enum: ["true", "false"],
        default: "true"
    },
    minutes: String,
    allowMultipleAttempts: {
        type: String, 
        enum: ["true", "false"],
        default: "false"
    },
    assignTo: String
  },
  { collection: "quizzes" }
);
export default quizzesSchema;
