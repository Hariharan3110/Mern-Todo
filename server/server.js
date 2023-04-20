// const express = require("express");
// const router = require("./routes/routes");
// const app = express();
// require("./models/db");
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// app.use("/api/tasks", router);
// app.listen("8000", (err) => {
//   if (err) console.log(err);
//   console.log("Server is started at PORT number: 8000");
// });

// // server.js
// require("dotenv").config(); //added
// const express = require("express");

// const connectDB = require("./config/db"); //added

// const app = express();

// // connect database
// connectDB();//added

// // initialize middleware
// app.use(express.json({ extended: false }));
// app.get("/", (req, res) => res.send("Server up and running"));

// // setting up port
// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });
// server.js
// require("dotenv").config();

// const express = require("express");
import express from "express"
import dotenv from "dotenv"
import todosRoutes from "./routes/todos.js"
import usersRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
//import connectionDB from "./database/connectionDB.js";
// const cors = require("cors"); // added
import cors from "cors"
import connectDB from "./config/db.js"

const app = express();

dotenv.config()
// connect database
connectDB();

// initialize middleware
app.use(express.json())
//app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())
// cors
app.use(cors({ origin: true, credentials: true })); // added

//app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/todos", todosRoutes);
app.use("/api/users", usersRoutes);

// setting up port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});