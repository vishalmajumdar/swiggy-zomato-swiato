const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that each email is unique in the database
    trim: true, // Removes leading/trailing whitespaces
    lowercase: true, // Converts email to lowercase before saving
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
