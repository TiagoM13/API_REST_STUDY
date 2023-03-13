const mongoose = require("mongoose");

mongoose.connect("mongodb://dbmongo:mongo123@localhost:27017/admin");
mongoose.Promise - global.Promise;

module.exports = mongoose;
