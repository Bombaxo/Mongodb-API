'use strict'

function testController(req, res){
    res.status(200).send({
        message: 'testing url'
    });
};

module.exports = {
    testController
};