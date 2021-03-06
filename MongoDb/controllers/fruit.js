'use strict'

var Fruit = require('../models/fruit');

function testController(req, res){
    res.status(200).send({
        message: 'testing url'
    });
}

function getFruits(req, res){
    Fruit.find({}).sort({'_id': -1}).exec((err, fruits) => {
        if (err){
            res.status(500).send({
                message: 'Server Error'
            });
        }else{
            if (fruits) {
                res.status(200).send({
                   fruits
                });
            }else{
                res.status(404).send({
                    message: 'Fruits were not found'
                });
            }  
        }  
    });
}

function getFruitById(req, res){

    var fruitId = req.params.id;

    Fruit.findById(fruitId).exec((err, fruit) => {
        if (err){
            res.status(500).send({
                message: 'Server Error'
            });
        }else{
            if (fruit) {
                res.status(200).send({
                   fruit
                });
            }else{
                res.status(404).send({
                    message: 'Fruit was not found'
                });
            }  
        }  
    });
}


function saveFruit(req, res){
    var fruit = new Fruit();

    var params = req.body;

    if (params.name) {
        fruit.name      = params.name;
        fruit.color     = params.color;
        fruit.season    = params.season;
        fruit.available = params.available;

        fruit.save(( err, fruitStored) => {
            if (err){
                res.status(500).send({
                    message: 'Server Error'
                });
            }else{
                if (fruitStored) {
                    res.status(200).send({
                       fruit: fruitStored
                    });
                }else{
                    res.status(200).send({
                        message: 'Fruit was not saved'
                    });
                }                
            }
        });
    }else{
        res.status(200).send({
            message: 'Name of fruit is required'
        });
    }
}

function updateFruit(req, res){

    var fruitId = req.params.id;
    var update  = req.body;

    Fruit.findByIdAndUpdate( fruitId, update, { new: true }, (err, fruitUpdated) => {
        if (err){
            res.status(500).send({
                message: 'Server Error'
            });
        }else{
            if (fruitUpdated) {
                res.status(200).send({
                    fruit: fruitUpdated
                });
            }else{
                res.status(404).send({
                    message: 'Fruit was not found'
                });
            }  
        }  
    });
}

function deletFruit(req, res){

    var fruitId = req.params.id;
    var update  = req.body; 

    Fruit.findByIdAndRemove(fruitId, (err, FruitRemoved) => {
        if (err){
            res.status(500).send({
                message: 'Server Error'
            });
        }else{
            if (FruitRemoved) {
                res.status(200).send({
                    fruit: FruitRemoved
                });
            }else{
                res.status(404).send({
                    message: 'Fruit was not found'
                });
            }  
        }  
    });

}

module.exports = {
    testController,
    saveFruit,
    getFruits,
    getFruitById,
    updateFruit,
    deletFruit
};