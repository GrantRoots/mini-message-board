const db = require("../db/queries");

async function showAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

function openMessage(req, res) {
  res.render("message", { message: req.query });
}

async function addMessage(req, res) {
  await db.addMessage([req.body.messageText, req.body.authorsName, Date()]);
  res.redirect("/");
}

module.exports = {
  showAllMessages,
  openMessage,
  addMessage,
};
