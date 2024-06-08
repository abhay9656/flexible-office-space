const express =require('express');
const router =express.Router();
const Model =require('../models/bookmodal');


router.post('/addBooking',(req,res)=>{
    console.log("booking Done ");
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getall', (req, res) => {
    Model.find().populate('space')
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

  router.get('/getbyuser/:user', (req, res) => {
    Model.find({user : req.params.id}).populate('space')
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

module.exports=router;