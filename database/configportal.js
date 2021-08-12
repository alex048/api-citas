const { createPool } = require("mysql");
const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOSTP,
  user: process.env.DB_USERP,
  password: process.env.DB_PASSP,
  database: process.env.MYSQL_DBP,
  connectionLimit: 10,
});

module.exports = pool; 