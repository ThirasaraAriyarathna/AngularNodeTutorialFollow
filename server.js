const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/testdb", (err) => {
  if(err){
    console.log("Error in connecting to the database"+ err);
  }
  else{
    console.log("Successfully connected to the database");
  }
});

//Get our API routes
const api = require('./server/routes/api');
const login = require('./server/routes/login');




app.use(morgan('dev'));

//Parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our api routes
app.use('/api',api);
app.use('/user',login);

//catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

//create http server
const server = http.createServer(app);

server.listen(port, ()=>console.log(`API running on localhost:${port}`));
