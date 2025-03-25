const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,      // e.g., your RDS endpoint
  user: process.env.DB_USER,      // your DB user
  password: process.env.DB_PASSWORD, // your DB password
  database: process.env.DB_NAME,  // your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
