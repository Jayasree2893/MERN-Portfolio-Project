const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/contact-form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("Error in connecting to database");
});

db.on("connected", () => {
  console.log("Database connected");
});

module.exports = db;
