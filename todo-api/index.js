const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.json({ message: "Todo App" });
});

app.listen(3001, function() {
  console.log("Server is listening on port 3001");
});
