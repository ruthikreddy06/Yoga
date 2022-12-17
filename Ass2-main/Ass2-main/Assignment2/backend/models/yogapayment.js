const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
        ref: "yogauser",
        required: true,
  },
  paidAt: {
    type: Date,
    default: Date.now,
  },
  batch: {
    type:String,
    required: true,
  }

});

module.exports = mongoose.model("yogapayment", paymentSchema);