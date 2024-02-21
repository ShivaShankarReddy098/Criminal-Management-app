const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Case = new Schema({
  caseNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  crimeType: {
    type: String,
    required: true,
  },
  dateReported: {
    type:String,
    required: true,
    default: Date.now(),
  },
  location: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
    enum: ["Open", "In Progress", "Closed"],
  },
});
module.exports = mongoose.model("case", Case);
