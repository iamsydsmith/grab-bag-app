var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: String,
  pic: String
});

module.exports = mongoose.model('Person', PersonSchema);
