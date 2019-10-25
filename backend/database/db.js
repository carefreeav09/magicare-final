const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magicare'
});

db.connect((err, result) => {
    if (err) throw err;

});

module.exports = db;