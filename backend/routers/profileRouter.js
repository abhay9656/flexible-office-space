const express = require('express');

const router = express.Router();
const Model =require('../models/profileModel');

// Define routes for profile

// GET request to fetch profile
router.get('/getall', (req, res) => {
    // Your code here
    Model.find()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err) 
    });
});

// POST request to create a new profile
router.post('/addProfile',(req,res)=>{
    console.log("Feedback added ");
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// PUT request to update an existing profile
router.put('/:id', (req, res) => {
    // Your code here
});

// DELETE request to delete a profile
router.delete('/:id', (req, res) => {
    // Your code here
});

module.exports = router;