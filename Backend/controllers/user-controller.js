const user = require("../models/user");
const userController = {};
// const bcrypt=require('bcrypt');
userController.getAllUser = async (req, res) => {
  try {
    const data = await user.find();
    // Sending back the users data
    res.status(200).json(data);
    data.save();
  } catch (err) {
    console.log("🤬", err);
  }
};
userController.getUser = async (req, res) => {
  try {
    const userData = await user.findById(req.params.id);
    if (!userData) {
      return res.status(400).send("No User Found!");
    }
    return res.status(200).json(userData);
  } catch (err) {
    console.log("🤬", err);
  }
};
userController.createUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    newUser.save();
    console.log("user created");
    res.status(201).json(newUser);
  } catch (err) {
    console.log("🤬", err);
  }
};
userController.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateField = req.body;
    const updatedUser = await user.findByIdAndUpdate(
      id,
      { $set: updateField },
      { new: true }
    );
    console.log("user updated", updatedUser);
    updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log("🤬", err);
  }
};
userController.deleteUser = async (req, res) => {
  try {
    let deletedUser = await user.findByIdAndDelete({ _id: req.params.id });
    console.log("user deleted");
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log("🤬", err);
  }
};
module.exports = userController;
