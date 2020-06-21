const express = require('express');

const router = express.Router();
var mongoose  = require('mongoose');
const path = require('path');
const User = require('../models/user');





router.get('/', function(req, res, next) {
    res.render('navbar', { title: 'Nodejs user registration'});
 })


/*
app.get('/test', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/layout.html'));
});

app.get('/hello', (req, res)=>{
  res.sendFile(path.join(__dirname + '/hello.html'));
});
*/

module.exports = router;
