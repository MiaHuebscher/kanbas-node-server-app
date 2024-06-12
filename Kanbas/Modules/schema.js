import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    name: { type: String, required: true},
    description: String,
    course: {type: String, required: true},
    lessons: Array,
  },
  { collection: "modules" }
);
export default modulesSchema;

