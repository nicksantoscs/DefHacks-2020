const express = require('express');

const app = express.Router();
const path = require('path');
const User = require('../models/user');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/login.html'));
});



app.get('/test', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/layout.html'));
});

app.get('/hello', (req, res)=>{
  res.sendFile(path.join(__dirname + '/hello.html'));
});

module.exports = app;
