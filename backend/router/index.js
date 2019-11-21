var express = require('express');
var router = express.Router();
const db = require('../database/connection');
const nepali = require('nepali-calendar-js');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
