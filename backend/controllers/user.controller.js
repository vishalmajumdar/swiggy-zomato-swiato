const User = require("../models/user.model"); // Assuming you have a User model

// Controller function for user registration
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password, // Remember to hash and salt the password in a real application
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check the password (in a real application, you should use a password hashing library like bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // You can generate a token here for authentication

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller function to fetch a list of users
exports.getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Send the list of users as a JSON response
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
