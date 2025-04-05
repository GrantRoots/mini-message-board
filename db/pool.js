const { Pool } = require("pg");

const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

module.exports = new Pool({
  connectionString: `postgres://koyeb-adm:${DATABASE_PASSWORD}@ep-bold-brook-a4v71v3m.us-east-1.pg.koyeb.app/koyebdb`,
});
