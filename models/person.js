var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  gifts: Array,
  partner:    [{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Pet'
           }]
});

module.exports = mongoose.model('Person', PersonSchema);
