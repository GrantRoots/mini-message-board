const express = require("express");
const app = express();
PORT = 3000;
const path = require("node:path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
app.get("/new", (req, res) => {
  tmp;
});

app.listen(PORT);
