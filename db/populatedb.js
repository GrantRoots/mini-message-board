#! /usr/bin/env node
console.log("Populatiing DB...");

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  added TEXT
);

INSERT INTO messages (text, username, added) 
VALUES  ('Hello Welcome To My Project', 'Grant R', CURRENT_DATE)
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
  console.log("Sucessfully populated dev");
  main();
} else {
  const DATABASE_HOST = process.env.DATABASE_HOST;
  const DATABASE_USER = process.env.DATABASE_USER;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  async function main() {
    const client = new Client({
      connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
  }
  console.log("Sucessfully populated");
  main();
}
