'use strict'

var Fruit = require('../models/fruit');

function testController(req, res){
    res.status(200).send({
        message: 'testing url'
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

module.exports = {
    testController,
    saveFruit
};