const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";
  data.streetAddress = !isEmpty(data.streetAddress) ? data.streetAddress : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.name = "First name must be between 2 to 30 chars";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.name = "First name is required";
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.name = "Last name must be between 2 to 30 chars";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.name = "Last name is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must have 6 chars";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = "Password must have 6 chars";
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Password and Confirm Password must match";
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Password is required";
  }

  if (Validator.isEmpty(data.streetAddress)) {
    errors.name = "Street Address is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.name = "City is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.name = "State is required";
  }

  if (Validator.isEmpty(data.zip)) {
    errors.name = "Zip Code is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
