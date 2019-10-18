const express = require('express');
const router = express.Router();
const db = require('../database/db');


router.get('/login', function(req, res, next) {
    const sql = 'select * from users';
    db.query(sql, (err, result)=> {
        if (err) throw err;
        console.log(result);
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
});

module.exports = router;