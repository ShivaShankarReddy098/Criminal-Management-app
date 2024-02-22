const {getAllUsers,getUser,createUser,updateUser,deleteUser}=require('../controllers/user-controller');
// const authService = require('../services/auth.service')
const express = require("express");
const router = express.Router();
router.post("/register",createUser);
router.get('/login',getUser);
// router.get('/allUser',getAllUsers);///******** we can not use not get operations*********
router.patch( '/updateUser/:id',updateUser);
router.delete( "/removeUser/:id" ,deleteUser);
module.exports=router;