const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

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

indexRouter.get("/", indexController.showAllMessages);
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
