const express = require('express');
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

const userSchema = require('../modal/userModal');

const router = express.Router();


// signup localhost://2000/signup

router.post('/signup', (req, res) => {

    bcrypt.hash(req.body.password, 10)

    .then( hash => {
        const user = new userSchema ({
            email: req.body.email, 
            password: hash, 
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        user.save()
        .then( result => {
            res.json({
                message: "the user has been created",
                result: result
            });            
        })

        .catch( err => {
            res.json({ error: err });
        });
    }) 
})

//  sign in (localhost:2000/login) 

router.post("login", (req, res) => {

    let findUser;

    // mongodb search

    userSchema.findOne({ email: req.body.email})

       .then( user => {
           if (!user){
               return res.json({
                   message: "User Not Found"
               });
           }

           findUser = user;

           // compares the password thats inputed to the stored PW

           return bcrypt.compare( req.body.password, user.password)

       })
       .then( result => {
           if (!result) {
               return res.json ({
                   message: " Auth Failed "
               });
           }

           const token = jwt.sign (

            // the auto generated _id from the collection in mongoDB

            { email: findUser.email, userId: findUser._id }, 

            "secret_longer",

            { expiresIn: "1h" }

           );

           const firstName = findUser.firstName;
           const lastName = findUser.lastName;

           res.json ({
               firstName,
               lastName,
               token,
               expiresIn: 10000
           });
       })
       
       .catch ( err => { console.log (err) })
})

// get information 

router.get('/info', (req, res) => {
    userSchema.find({})
        .then( data => {
            res.json({
                data
            })
        })
})

module.exports = router;
