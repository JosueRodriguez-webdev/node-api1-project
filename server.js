const express = require("express");
//Routes
const users = require("./routes/users");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("This is homepage");
});

// Setting routes
server.use("/api/users", users);

module.exports = server;
