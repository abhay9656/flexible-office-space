const express =require('express');
const router =express.Router();
const Model =require('../models/userModels');


router.post('/addSpace',(req,res)=>{
    console.log("booking done");
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports=router