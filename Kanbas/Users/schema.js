import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: String,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: String,
    totalActivity: String,
    enrollments: Array,
    quizAttempts: Array
  },
  { collection: "users" }
);
export default userSchema;

