const mongoose = require("mongoose");

const URI = "mongodb://localhost/tododb";
mongoose
  .connect(URI)
  .then((db) => console.log("The database is connect"))
  .catch((err) => console.log(err));

module.exports = mongoose;
