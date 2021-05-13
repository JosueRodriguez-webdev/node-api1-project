const express = require("express");
const { nanoid } = require("nanoid");

const users = express.Router();

let persons = [];

// Returns array of users
users.get("/", (req, res) => {
  return res.status(200).json({ persons: persons });
});

// Create single user

// Returns single user with matching id

// Removes single user with matching id

// Updates user with matching id

module.exports = users;
