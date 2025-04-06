const { Pool } = require("pg");

const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const ENV = process.env.ENV;
if (ENV === "dev") {
  const ROLE_NAME = process.env.ROLE_NAME;
  const ROLE_PASSWORD = process.env.ROLE_PASSWORD;
  module.exports = new Pool({
    connectionString: `postgresql://${ROLE_NAME}:${ROLE_PASSWORD}@localhost:5432/messages`,
  });
  console.log("Running in dev pool");
} else {
  module.exports = new Pool({
    connectionString: `postgres://koyeb-adm:${DATABASE_PASSWORD}@ep-bold-brook-a4v71v3m.us-east-1.pg.koyeb.app/koyebdb`,
  });
}
