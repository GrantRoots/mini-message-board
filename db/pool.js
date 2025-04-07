require("dotenv").config();
const { Pool } = require("pg");

//set ENV, ROLE_NAME, ROLE_PASSWORD if dev
const ENV = process.env.ENV;
if (ENV === "dev") {
  const ROLE_NAME = process.env.ROLE_NAME;
  const ROLE_PASSWORD = process.env.ROLE_PASSWORD;
  module.exports = new Pool({
    connectionString: `postgresql://${ROLE_NAME}:${ROLE_PASSWORD}@localhost:5432/messages`,
  });
  console.log("Running in dev pool");
} else {
  const DATABASE_HOST = process.env.DATABASE_HOST;
  const DATABASE_USER = process.env.DATABASE_USER;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  module.exports = new Pool({
    connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  console.log("Running production pool...");
}
