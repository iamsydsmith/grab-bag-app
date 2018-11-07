const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  gifts: Array
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    unique: true,
    required: true
  }, // end user email
  password: {
    type: String,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)./,
    required: true
  }, // end user password
  avatar: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  family: Array,
  gifts: Array,
  partner: [PartnerSchema],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

UserSchema.pre("update", function(done) {
  this.updated = Date.now;
  done();
});

module.exports = mongoose.model("User", UserSchema);
