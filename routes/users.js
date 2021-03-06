const express = require("express");
const { nanoid } = require("nanoid");

const users = express.Router();

let persons = [{ id: 1, name: "josue" }];

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
users.delete("/:id", (req, res) => {
  const id = req.params.id;
  let was_deleted = false;
  for (let idx in persons) {
    if (id == persons[idx].id) {
      persons.pop(idx);
      was_deleted = true;
    }
  }

  if (was_deleted) {
    return res.status(200).json({ message: "Deletion Success" });
  }

  res.status(404).json({ message: "User does not exist" });
});

// Updates user with matching id
users.put("/:id", (req, res) => {
  const ID = req.params.id;
  let person;

  for (let idx in persons) {
    if (ID == persons[idx].id) {
      const id = persons[idx].id;
      persons[idx] = { ...persons[idx].id, ...req.body };
      persons[idx] = { ...persons[idx], id };
      person = persons[idx];
    }
  }

  if (person) {
    return res.status(200).json(person);
  }

  res.status(404).json({ message: "User not found" });
});

module.exports = users;
