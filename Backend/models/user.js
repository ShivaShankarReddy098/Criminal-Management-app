const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create schema for the user model
let UserSchema = new Schema({
  username: { type: String, required: [true, "User name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique:true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});
module.exports = mongoose.model("user", UserSchema);
