import "dotenv/config";
import cors from "cors";
import session from "express-session";
//const MemoryStore = require('memorystore')(session) //new
import { MemoryStore } from "express-session"; // new
import express from "express";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + CONNECTION_STRING);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
    sessionOptions.store = new MemoryStore({
      checkPeriod: 86400000 }) //new
  };
app.use(session(sessionOptions));
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);
UserRoutes(app);
Lab5(app);
Hello(app);
app.listen( process.env.PORT || 4000);