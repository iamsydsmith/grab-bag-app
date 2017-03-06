var express = require('express');
var router = express.Router();
var Person = require('../models/person');


router.get('/', function(req, res, next) {
    Person.find({})
        .then(function(people) {
            res.json(people);
        });
});

module.exports = router;
