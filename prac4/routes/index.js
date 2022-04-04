var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var time = " ";
router.get('/last.txt', function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(time);
    time = new Date().toString();
});

module.exports = router;
