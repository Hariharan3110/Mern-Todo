// const mongoose = require("mongoose");

// module.exports = mongoose
//   .connect("mongodb://127.0.0.1:27017/todolist")
//   .then(() => {
//     console.log(` MongoDB connection Succeded...`);
//   })
//   .catch((err) => {
//     console.log(` Error in DB connection ${err}`);
//   });

// config/db.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todolist", {
           
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB
