const express = require("express");
const { nanoid } = require("nanoid");

const users = express.Router();

let persons = [{ id: 1 }];

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
users.get("/:id", (req, res) => {
  const ID = req.params.id;
  const person = persons.find(({ id }) => {
    return id == ID;
  });

  if (person) {
    return res.status(200).json(person);
  }

  res.status(404).json({ error: "Person not found :(" });
});

// Removes single user with matching id

// Updates user with matching id

module.exports = users;
