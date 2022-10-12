const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// Global route
app.get("/", (req, res) => {
  res.send("welcome to crud project");
});

// routes
const todoRouter = require("./routes/todoRouter");
const userRouter = require("./routes/userRouter");
app.use("/app/v1", todoRouter);
app.use("/app/v1", userRouter);

module.exports = app;
