const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  console.log("query messages", rows);
  return rows;
}

async function openMessage(user) {
  user = "%" + user + "%";
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE LOWER(username) LIKE LOWER($1);",
    [user]
  );
  return rows;
}

async function addMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);",
    message
  );
}

module.exports = {
  getAllMessages,
  openMessage,
  addMessage,
};
