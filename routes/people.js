var express = require('express');
var router = express.Router();
var Person = require('../models/person');


router.get('/api/people', , function(req, res) {
        Person.find(function(err, people) {
            if (err)
                res.send(err)

            res.json(people);
        });
    });

module.exports = router;
