const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../passport/register");
const validateLoginInput = require("../passport/login");

const User = require("../models/user");

router.get("/", function(req, res, next) {
  User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(400).send("unable to get database");
    });
});

router.get("/:id", function(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(user);
    })
    .catch(err => {
      return next(err);
    });
});

router.post("/register", function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error("There was an error", err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error("There was an error", err);
            else {
              newUser.password = hash;
              newUser.save().then(user => {
                res.json(user);
              });
            }
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          streetAddress: user.streetAddress,
          city: user.city,
          state: user.state,
          zip: user.zip,
          family: user.family,
          gifts: user.gifts,
          partner: user.partner
        };
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) console.error("There is some error in token", err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`,
                user: payload
              });
            }
          }
        );
      } else {
        errors.password = "Incorrect Password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    });
  }
);

router.delete("/:id", function(req, res, next) {
  const id = req.params.id;
  User.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.status(200).send("family member was deleted");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;

// router.patch("/:id", authenticate, function(req, res, next) {
//   delete req.body._id;
//   User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   })
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(err => {
//       res.status(400).send("Unable to save to database");
//     });
// });
//
