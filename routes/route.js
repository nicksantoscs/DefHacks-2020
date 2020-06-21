const express = require('express');

const router = express.Router();

router.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/login.html'));
});

router.get('/test', (req, res)=>{
  res.sendFile(path.join(__dirname + '/templates/layout.html'));
});

router.get('/hello', (req, res)=>{
  res.sendFile(path.join(__dirname + '/hello.html'));
});

module.exports = router;
