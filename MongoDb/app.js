'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3800, () => {
    console.log('Server is running in localhost:3800');
});

// load routes


// body.parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure CORS

// routes
app.get('/test-api', (req, res) => {
    res.status(200).send({
        message: 'testing url'
    });
});

module.export = app;