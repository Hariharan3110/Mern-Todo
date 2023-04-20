// // router/todo.js
// const express = require("express");
// const router = express.Router();

// /**
//  * @route GET api/todo
//  * @description get all todo
//  * @access public
//  */
// router.get("/");

// /**
//  * @route POST api/todo
//  * @description add a new todo
//  * @access public
//  */
// router.post("/");

// /**
//  * @route PUT api/todo/:id
//  * @description update todo
//  * @access public
//  */
// router.put("/:id");

// /**
//  * @route DELETE api/todo/:id
//  * @description delete todo
//  * @access public
//  */
// router.delete("/:id");

// module.exports = router;

// routes/todo.js
// const express = require("express");

// const {
//     getAllTodo,
//     postCreateTodo,
//     putUpdateTodo,
//     deleteTodo,
// } = require("../controllers/todo1");



// router.post("/register", register)

// router.post("/login", login);

// router.get("/logout", logout);

// router.get("/me", getMe);

// router.put("/updatedetails", updateDetails);

// router.put("/updatepassword", updatePassword);

// router.delete("/delete", deleteUser);

import express from "express";
import authorize from "../middleware/authorize.js";
import { getTodo,getTodos, createTodo, updateTodo,deleteTodo } from "../controllers/todosController.js";
import { createTodoRules, updateTodoRules } from "../middleware/validator.js";
import { validateResult } from "../middleware/validationResults.js";
const router = express.Router();
//import { register, login, logout, getMe,updateDetails, updatePassword, deleteUser} from "../controllers/usersController.js";


router.get("/:id",authorize, getTodo);

router.get("/",authorize, getTodos);

router.post("/create",authorize, createTodoRules, validateResult, createTodo);

router.put("/update/:id",authorize, updateTodoRules, validateResult, updateTodo);

router.delete("/delete/:_id",authorize, deleteTodo);


export default router