const mongoose = require("mongoose");

connectToDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log(`Mongoose connection is successfully`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDatabase;
