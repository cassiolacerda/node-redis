var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db_employees", {
  promiseLibrary: global.Promise,
  keepAlive: true,
  keepAliveInitialDelay: 5000,
});

var db = mongoose.connection;

db.on("error", function (error) {
  console.error(error);
});

db.once("open", function () {
  console.log("Database Connected");
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: String,
  mail: String,
  role: String,
});

var Person = mongoose.model("Person", personSchema);

module.exports = Person;
