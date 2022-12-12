import express from "express";
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";

const app = express();

// Config DotEnv
dotenv.config();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables for Routes
import indexRoute from "./routes/index.js";

// Setting the views of the application
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting Static Files
app.use(express.static("public"));

// Use the routes of the application
app.use("/", indexRoute);

export default app;
