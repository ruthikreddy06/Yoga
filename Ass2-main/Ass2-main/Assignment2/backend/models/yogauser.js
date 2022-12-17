const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"]
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  dob: {
    type: Date,
    required: [true, "Please Enter Your DOB"]
  }

});

module.exports = mongoose.model("yogauser", userSchema);
