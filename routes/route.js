const express = require('express');

const app = express.Router();
const Post = require('../models/post');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/login.html'));
});

app.post('/addUser',(req,res)=>{
  console.log(req.body);
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    age: req.body.age,
    password:req.body.password
  });
  post.save().then(data=>{
    res.json(data);
  })
  .catch(err=>{
    console.log("Wrong!");
  })
});

app.get('/test', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/layout.html'));
});

app.get('/hello', (req, res)=>{
  res.sendFile(path.join(__dirname + '/hello.html'));
});

module.exports = app;
