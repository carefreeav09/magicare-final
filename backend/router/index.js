var express = require('express');
var router = express.Router();
const db = require('../database/connection');
const nepali = require('nepali-calendar-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  let date = '2076/08/04';

  console.log(nepali.toGregorian(2076,8, 4));
  res.render('index', { title: 'Express' });
});

module.exports = router;
