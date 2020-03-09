const express = require("express");

const server = express();

const PORT = 5000;
server.listen(PORT, (req, res) => {
  console.log(`Hello in localhost${PORT}`);
});
