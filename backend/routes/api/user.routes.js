const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

// Registration route
router.post("/register", userController.register);

// Login route
router.post("/login", userController.login);

// Fetch Users
router.get("/", userController.getUsers);

module.exports = router;
