const router = require('express').Router();
const Person = require('../models/person');


router.get('/', function(req, res, next) {
  Person.find({})
  .then(people => {
    res.json(people);
  })
  .catch(err => {
    res.status(400).send("unable to get database");
  });
});

router.get('/:id', function(req, res, next) {
  Person.findById(req.params.id)
  .then(person => {
    if (!person) {
      res.status(404).json( { error: 'Not found' } );
    }
    res.json(person);
  })
  .catch(err => {
    return next(err);
  });
});

router.post('/', function (req, res, next) {
  const newPerson = new Person(req.body);

  newPerson.save()
  .then(person => {
    res.send(person.name + " was saved to database");
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  Person.findOneAndRemove({ _id: req.params.id })
  .then(() => {
    res.send("family member was deleted")
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
});

module.exports = router;
