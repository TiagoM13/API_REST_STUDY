require("dotenv").config();

const mongoose = require("mongoose");

const uri = process.env.URL_MONGODB;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Error connecting to MongoDB", err));
mongoose.Promise - global.Promise;

module.exports = mongoose;
