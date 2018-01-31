'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FruitSchema = Schema({
    name: String,
    color: String,
    season: String,
    available: Boolean
});

module.exports =  mongoose.model('Fruit', FruitSchema);