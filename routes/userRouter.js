const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET All Todo
router
  .route("/users")
  .post(userController.registerNewUser)
  .get(userController.loginUser);

module.exports = router;
