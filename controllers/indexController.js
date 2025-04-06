const db = require("../db/queries");

async function showAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

function openMessage(req, res) {}

function addMessage(req, res) {}

module.exports = {
  showAllMessages,
};
