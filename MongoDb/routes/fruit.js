'use strict'

var express = require('express');

var FruitController = require('../controllers/fruit');

var api = express.Router();

api.get('/testing', FruitController.testController);
api.post('/savefruit', FruitController.saveFruit);

module.exports = api;