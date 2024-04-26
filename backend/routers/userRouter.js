const express =require('express');
const router =express.Router();
const model =require('../models/userModels');

router.get('/add',(req,res)=>{
    res.send("response from user")
})

module.exports=router