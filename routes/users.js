const express = require("express");
const { nanoid } = require("nanoid");

const users = express.Router();

let persons = [];

// Returns array of users
users.get("/", (req, res) => {
  res.status(200).json({ persons: persons });
});

// Create single user
users.post("/", (req, res) => {
  const id = nanoid();
  const new_person = { id, ...req.body };
  persons.push(new_person);
  res.status(201).json({ person: new_person });
});

// Returns single user with matching id

// Removes single user with matching id

// Updates user with matching id

module.exports = users;
