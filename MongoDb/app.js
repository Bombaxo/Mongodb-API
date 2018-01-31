'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3800, () => {
    console.log('Server is running in localhost:3800');
});

// load routes
var fruits_router = require('./routes/fruit');

// body.parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure CORS

// base routes 
app.use('/api', fruits_router);

module.export = app;