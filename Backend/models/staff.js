const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const staffSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  staffNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["admin", "cid", "nco"],
  },
});
module.exports=mongoose.model("staff",staffSchema);
