const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.model('users',{username: String, password: String});



//Get all tasks
router.get('/login', (req, res, next) => {
  mongoose.model('users').find((err, users) => {
    if(err){
      res.send(err);
    }
    console.log(users);
    res.json(users);
  });

});

module.exports = router;
