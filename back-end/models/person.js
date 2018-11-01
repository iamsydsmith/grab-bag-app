const mongoose = require('mongoose');

// const PartnerSchema = new mongoose.Schema({
//   name:  { type: String, required: true },
//   email: { type: String, required: true },
//   picture: String,
//   gifts: Array
// });

const PersonSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  family: Array,
  gifts: Array,
  partner : String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

PersonSchema.pre('update', function(done) {
    this.updated = Date.now;
    done();
});

module.exports = mongoose.model('Person', PersonSchema);
