const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

require('dotenv/config');

//import routes
const postsRoute = require('./routes/route');

app.use('login', loginRoute);


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'));
});

//testing each routes


//creating database
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, ()=>
console.log('connected to DB!'));

app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`);
});
