const mysql = require("mysql");
require("dotenv").config();

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'magicare'
});