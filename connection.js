const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dicky",
  database: "data_karyawan"
});

module.exports = db;