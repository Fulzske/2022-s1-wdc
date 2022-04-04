var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var date;
router.get('/last.txt', function(req, res, next) {
  date = new Date();
  res.send(String(date));
});

module.exports = router;
