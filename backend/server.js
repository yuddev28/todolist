const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Jenkins" }
];

// GET todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST todo
app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text
  };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});