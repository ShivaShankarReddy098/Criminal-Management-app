const {getAllCase,getCase,createCase,updateCase,deleteCase}=require('../controllers/case-controller');
// const authService = require('../services/auth.service')
const express = require("express");
const router = express.Router();
router.post("/createCase",createCase);
router.get('/getAllCase',getAllCase);
// router.get('/allUser',getAllUsers);///******** we can not use  get operations*********
router.patch( '/updateCase/:id',updateCase);
router.delete( "/removeCase/:id" ,deleteCase);
module.exports=router;