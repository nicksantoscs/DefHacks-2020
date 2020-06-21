var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
const User = require('../models/user');
var crypto    = require('crypto'), hmac, signature;
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize }   = require('express-validator/filter');

   /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('registration', { title: 'Nodejs user registration'});
   })

  /* POST user registration page. */
  router.post('/login',[

    check('full_name','Name cannot be left blank')
    .isLength({ min: 1 }),

    check('email')
    .isEmail().withMessage('Please enter a valid email address')
    .trim()
    .normalizeEmail()
    .custom(value => {
        return findUserByEmail(value).then(User => {
          //if user email already exists throw an error
      })
    }),

    check('password')
    .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
    


   ], function(req, res, next) {

      const errors = validationResult(req);

    if (!errors.isEmpty()) {

       res.json({status : "error", message : errors.array()});

    } else {

        hmac = crypto.createHmac("sha1", 'auth secret');
        var encpassword = '';

        if(req.body.password){
          hmac.update(req.body.password);
          encpassword = hmac.digest("hex");
        }
        var document = {
            email:       req.body.email,
            password:    encpassword

          };

        var user = new User(document);
        user.save(function(error){
          console.log(user);
          if(error){
            throw error;
          }
          res.json({message : "Data saved successfully.", status : "success"});
       });
    }
});

function findUserByEmail(email){

  if(email){
      return new Promise((resolve, reject) => {
        User.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
          })
      })
    }
 }


module.exports = router;
