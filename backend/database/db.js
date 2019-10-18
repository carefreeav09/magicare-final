const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'magicare'
});

db.connect((err, result) => {
    if (err) throw err;

});

module.exports = db;