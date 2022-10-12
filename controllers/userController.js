const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER NEW USER
exports.registerNewUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 16);
    const data = await User.create({
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword,
      status: req.body.status,
      date: req.body.date,
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

// LOGIN USER
exports.loginUser = async (req, res, next) => {
  try {
    const email = req.query.email;
    const data = await User.findOne({ email });
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
