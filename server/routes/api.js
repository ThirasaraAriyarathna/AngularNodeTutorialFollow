const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

const axios = require('axios');
const API = "https://jsonplaceholder.typicode.com/posts";

//get api listening
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  axios.get(`${API}`).then(posts => {
    res.status(200).json(posts.data);
  }).catch(error => {
    res.status(500).send(error);
  });
});

//http://localhost:3000/api/signup
router.post('/signup', (req, res) => {
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;

  if (req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == ""){
    res.json({success: false, message: "Ensure username and password are provided"});
  }
  else{
    user.save((err) => {
      if(err){
        res.json({success: false, message: "Username already exits"});
      }
      else{
        res.json({success: true, message: "user created"});
      }
    });
  }


});

module.exports = router;
