import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    title: { type: String, required: true},
    course: { type: String, required: true},
    description: String, 
    points: String,
    assignmentGroup: {
        type: String, 
        enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"],
        default: "ASSIGNMENTS" 
    },
    displayGradeAs: {
        type: String, 
        enum: ["Percentage", "Letter"],
        default: "Percentage" 
    },
    submissionType: {
        type: String, 
        enum: ["Online", "In Class"],
        default: "Online" 
    },
    onlineEntryOption: {
        type: String, 
        default: "File Upload" 
    } ,
    assignTo: String,
    due: String,
    availableFrom: String,
    availableUntil: String
  },
  { collection: "assignments" }
);
export default assignmentsSchema;

