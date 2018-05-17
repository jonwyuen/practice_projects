const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Model class
const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;
