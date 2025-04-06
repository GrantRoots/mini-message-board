#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  added DATE
);

INSERT INTO messages (text, username, added) 
VALUES  ('Hello, this is a test message!', 'Test User', CURRENT_DATE)
`;

//set ENV, ROLE_NAME, ROLE_PASSWORD if dev
const ENV = process.env.ENV;
if (ENV === "dev") {
  console.log("populate dev");
  const ROLE_NAME = process.env.ROLE_NAME;
  const ROLE_PASSWORD = process.env.ROLE_PASSWORD;
  async function main() {
    const client = new Client({
      connectionString: `postgresql://${ROLE_NAME}:${ROLE_PASSWORD}@localhost:5432/messages`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
  }
  main();
} else {
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  async function main() {
    const client = new Client({
      connectionString: `postgres://koyeb-adm:${DATABASE_PASSWORD}@ep-bold-brook-a4v71v3m.us-east-1.pg.koyeb.app/koyebdb`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
  }
  main();
}
