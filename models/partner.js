var mongoose = require('mongoose');

var PartnerSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  gifts: Array,
  partner:    [{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Person'
           }]
});

module.exports = mongoose.model('Partner', PartnerSchema);
