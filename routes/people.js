var express = require('express');
var router = express.Router();
var Person = require('../models/person');


function getPeople(person) {
  var people = [];
  person.people.forEach(function(personId) {
    var person = currentUser.people.id(personId);
    people.push(person);
  });
  return people;
}

module.exports = router;
