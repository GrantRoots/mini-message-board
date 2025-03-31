const express = require("express");
const indexRouter = express.Router();

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

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.get("/message", (req, res) => {
  console.log(req.query);
  res.render("message", { message: req.query });
});
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
