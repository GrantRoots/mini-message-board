#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT(255),
  user VARCHAR(255),
  added DATE
);

INSERT INTO messages (text, user, date) 
VALUES  ('Hello, this is a test message!', 'Test User', CURRENT_DATE)
`;

const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://koyeb-adm:${DATABASE_PASSWORD}-bold-brook-a4v71v3m.us-east-1.pg.koyeb.app/koyebdb`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
