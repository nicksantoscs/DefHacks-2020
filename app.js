const express = require('express');
const app = express();
const path = require('path');

/*Configure Express*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


/*Routes*/
// app.use('/', (req, res) => {
//     /*Test*/
//     res.send("Welcome to the CMS");
// });

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/templates/index.html'));
});

// PORT
const port = process.env.POST;
app.listen(port, () => {
    console.log('Running on port ' + port);
});
