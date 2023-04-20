// const express = require("express");
// const Task = require("../models/models");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { todo, isComplete } = req.body;
//     const task = new Task({ todo, isComplete });
//     const create = await task.save();

//     res.json(create);
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const docs = await Task.find();
//     res.json(docs);
//   } catch (err) {
//     console.log(err);
//   }
// });



// router.put("/:id", async (req, res) => {
//   try {
//     const data = await Task.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       {
//         new: true,
//       },
//       res.json(data)
//     );
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//    const data = await Task.findByIdAndDelete(req.params.id)
//     res.json(data)
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = router;
