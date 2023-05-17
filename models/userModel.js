const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email."],
    lowercase: true,
    validator: [validator.isEmail, "Please provide a valid email."],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Password should have atleast 8 characters."],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      // This only works on create() and save()
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same.",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
