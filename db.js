var mongoose = require('mongoose');

var db = mongoose.connection;

// CONNECTION EVENTS
db.once('open', function() {
  console.log("Opened mongoose.");
});
db.once('close', function() {
  console.log("Closed mongoose.");
});
db.on('connected', function() {
  console.log('Mongoose connected to ' + db.host + ':' + db.port + '/' + db.name);
});
db.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
db.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

module.exports = db;
