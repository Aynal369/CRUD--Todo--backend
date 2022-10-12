const Todo = require("../models/Todo");

// POST TODO
exports.createTodo = async (req, res, next) => {
  try {
    const data = await Todo.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// POST MULTIPLE TODO
exports.createMultipleTodo = async (req, res, next) => {
  try {
    const data = await Todo.insertMany(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// GET ALL TODO
exports.getAllTodo = async (req, res, next) => {
  try {
    const data = await Todo.find({});
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// GET SINGLE ONE TODO
exports.getSingleOneTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Todo.findById(id);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// PATCH TODO
exports.updateSpecificOneTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const data = await Todo.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// PUT TODO
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const data = await Todo.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// PUT TODO
exports.updateAllTodo = async (req, res, next) => {
  try {
    const updateData = req.body;
    const data = await Todo.updateMany({}, updateData);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
// DELETE TODO
exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
