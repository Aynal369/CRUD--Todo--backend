const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// GET All Todo
router
  .route("/todo")
  .post(todoController.createTodo)
  .post(todoController.createMultipleTodo)
  .put(todoController.updateAllTodo)
  .get(todoController.getAllTodo);
router.route("/todo/all").post(todoController.createMultipleTodo);
router
  .route("/todo/:id")
  .get(todoController.getSingleOneTodo)
  .put(todoController.updateTodo)
  .patch(todoController.updateSpecificOneTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
