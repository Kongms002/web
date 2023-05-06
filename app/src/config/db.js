const mysql = require("mysql");

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '8828',
    user: "admin",
    password: "020221",
    database: "app_study",
});

db.connect();

module.exports = db;