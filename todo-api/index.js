const express = require("express");
const app = express();

const todoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
  res.json({ message: "Todo App" });
});

app.use("/api/todos", todoRoutes);

app.listen(3001, function() {
  console.log("Server is listening on port 3001");
});
