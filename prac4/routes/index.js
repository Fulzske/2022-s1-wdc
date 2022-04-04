var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var d = "";
router.get('/last.txt', function(req, res, next) {
    res.send(d);
    d = new Date().toString();
});



module.exports = router;
