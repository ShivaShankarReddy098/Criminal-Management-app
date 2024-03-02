const Case = require("../models/case");
const caseController = {};
// const bcrypt=require('bcrypt');
caseController.getAllCase = async (req, res) => {
  try {
    console.log("getAllCases");
    const data = await Case.find();
    // Sending back the Cases data
    res.status(200).send(data);
  } catch (err) {
    console.log("🤬", err);
  }
};
caseController.getCase = async (req, res) => {
  try {
    const CaseData = await Case.findById(req.params.id);
    if (!CaseData) {
      return res.status(400).send("No Case Found!");
    }
    return res.status(200).json(CaseData);
  } catch (err) {
    console.log("🤬", err);
  }
};
caseController.createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);
    newCase.save();
    console.log("Case created");
    // res.status(201).send(newCase);
    res.redirect("/admin.html");
  } catch (err) {
    console.log("🤬", err);
  }
};
caseController.updateCase = async (req, res) => {
  try {
    const id = req.params.id;
    const updateField = req.body;
    const updatedCase = await Case.findByIdAndUpdate(
      id,
      { $set: updateField },
      { new: true }
    );
    console.log("Case updated", updatedCase);
    updatedCase.save();
    res.status(200).json(updatedCase);
  } catch (err) {
    console.log("🤬", err);
  }
};
caseController.deleteCase = async (req, res) => {
  try {
    let deletedCase = await Case.findByIdAndDelete({ _id: req.params.id });
    console.log("Case deleted");
    res.status(200).json(deletedCase);
  } catch (err) {
    console.log("🤬", err);
  }
};
module.exports = caseController;
