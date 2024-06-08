const express =require('express');
const router =express.Router();
const Model =require('../models/userModels');
require('dotenv').config();

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})



router.post('/authenticate',async (req,res)=>{
    console.log(req.body);
    const {name,password, recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ message: 'reCAPTCHA token is missing' });
    }
  
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log(secretKey);
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  
    const response = await fetch(verificationUrl, { method: 'POST' });
    const verificationResult = await response.json();
    console.log(verificationResult);
    if (!verificationResult.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    Model.findOne({name : name, password : password})
    .then((result) => {
        if(result) res.status(200).json(result);
        else res.status(401).json({message:'login Failed'})
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put("/update/:id", (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      res.status(500).json(err);
    });
  });

router.get('/getall', (req, res) => {
    Model.find()
      .then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err) 
      });
  });


  router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err) 
    });
  })

  router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err) 
    });
  })
  
  router.get("/getbymail/:email", (req,res) => {
    Model.findOne({email: req.params.email })
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({status: "User not found"});
        }
    }).catch((err) => {
        res.status(500).json(err);
    })
 })

module.exports=router