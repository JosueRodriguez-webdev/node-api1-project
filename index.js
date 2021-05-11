const express = require("express");

const server = express();

server.use(express.json());

const PORT = 5000;

server.get("/", (req, res) => {
  res.send("This is homepage");
});

server.listen(PORT, (req, res) => {
  console.log(`Hello World, we are in ${PORT}`);
});
