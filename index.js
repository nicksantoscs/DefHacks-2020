const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

require('dotenv/config');

app.use(bodyParser.json());

//import routes
const loginRoute = require('./routes/login');
const pages = require('./routes/pages');
const register = require('./routes/register');

app.use('/login', loginRoute);
app.use('/register', register);
app.use('/pages', pages);



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
