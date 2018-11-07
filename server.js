// set up ========================
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
const passport = require("passport");
var db = require("./db");

// =================================================
// ROUTES
// =================================================
var users = require("./routes/users");

// configuration =================

var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/grab-bag-app";

mongoose.connect(mongoURI);

// connect to mongoDB database on modulus.io

function quit() {
  mongoose.disconnect();
  console.log("All Done!");
}

app.use(express.static(__dirname + "/app"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride());
app.use(require("cors")());

app.use("/api/users", users);

// listen (start app with node server.js) ======================================

app.listen(process.env.PORT || 7100);
console.log("App listening on port 7100");

module.exports = app;
