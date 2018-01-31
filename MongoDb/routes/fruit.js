'use strict'

var express = require('express');

var FruitController = require('../controllers/fruit');

var api = express.Router();

api.get('/testing', FruitController.testController);
api.get('/fruits', FruitController.getFruits);
api.get('/fruit/:id', FruitController.getFruitById);
api.post('/savefruit', FruitController.saveFruit);
api.put('/updatefruit/:id', FruitController.updateFruit);
api.delete('/deletefruit/:id', FruitController.deletFruit);

module.exports = api;