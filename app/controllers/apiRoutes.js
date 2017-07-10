const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/MainSchema.js');

// Database configuration with mongoose
mongoose.connect('mongodb://localhost/willItDB');
const db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
    console.log('Mongoose connection successful.');
});

router.get('/',(req,res) => {
    res.send("api");
});

router.post('/newUser',(req,res) => {
    let placeholderUser = {
        "firstName":"John",
        "lastName":"Doe",
        "authToken":"bestpasswordever",
        "formData":{
            "q1":"a1",
            "q2":"a2",
            "q3":"a3"
        }
    }

    let newUser = new User(placeholderUser);

    newUser.save(function(err, doc) {
                // log any errors
                if (err) {
                    console.log(err);
                }
                // or log the doc
                else {
                    console.log(doc);
                    res.send("Hai Fam! You saves a user!");
                }
            });//end entry save
});

module.exports = router;