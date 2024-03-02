const Staff = require("../models/staff");
const staffController = {};
// const bcrypt=require('bcrypt');
staffController.getAllStaff = async (req, res) => {
  try {
    const data = await Staff.find();
    // Sending back the Staffs data
    res.status(200).send(data);
  } catch (err) {
    console.log("🤬", err);
  }
};
staffController.getStaff = async (req, res) => {
  try {
    const StaffData = await Staff.findById(req.params.id);
    if (!StaffData) {
      return res.status(400).send("No Staff Found!");
    }
    return res.status(200).json(StaffData);
  } catch (err) {
    console.log("🤬", err);
  }
};
staffController.createStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    newStaff.save();
    console.log("Staff created");
    res.redirect("/admin.html");
  } catch (err) {
    console.log("🤬", err);
  }
};
staffController.updateStaff = async (req, res) => {
  try {
    const id = req.params.id;
    const updateField = req.body;
    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      { $set: updateField },
      { new: true }
    );
    console.log("Staff updated", updatedStaff);
    updatedStaff.save();
    res.status(200).json(updatedStaff);
  } catch (err) {
    console.log("🤬", err);
  }
};
staffController.deleteStaff = async (req, res) => {
  try {
    let deletedStaff = await Staff.findByIdAndDelete({ _id: req.params.id });
    console.log("Staff deleted");
    res.status(200).json(deletedStaff);
  } catch (err) {
    console.log("🤬", err);
  }
};
module.exports = staffController;
