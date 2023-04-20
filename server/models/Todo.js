// const mongoose = require("mongoose");

// const TaskSchema = new mongoose.Schema({
//   todo: String,
//   isComplete: Boolean,
// });

// const Task = mongoose.model("task", TaskSchema);

// module.exports = Task;

// models/todo.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
}, {timestamps:true});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo