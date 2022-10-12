require("dotenv").config();
const connectToDatabase = require("./utils/connectToDatabase");
const app = require("./app");

connectToDatabase();

const port = process.env.PORT || 5000;

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
