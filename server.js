const express = require("express");

//Routes

//Routes end...

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("This is homepage");
});

module.exports = server;
