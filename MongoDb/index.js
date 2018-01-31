'use strict'

var mongoose = require('mongoose');

var apps = require('./app');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curse_mongodb')
    .then(() => {
        console.log('Connection to DB successful!!');

    })
    .catch(err => console.log(err));