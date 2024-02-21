const {getAllStaff,getStaff,createStaff,updateStaff,deleteStaff}=require('../controllers/staff-controller');
// const authService = require('../services/auth.service')
const express = require("express");
const router = express.Router();
router.post("/registerStaff",createStaff);
router.get('/getStaff/:id',getStaff);
// router.get('/allUser',getAllUsers);///******** we can not use not get operations*********
router.patch( '/updateStaff/:id',updateStaff);
router.delete( "/removeStaff/:id" ,deleteStaff);
module.exports=router;