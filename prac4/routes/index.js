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

var times = "";
var counter = 0;
router.get('/log.html', function(req, res, next) {

    var time = new Date().toString();

    while(counter >= 0) {
        times = "<li>" + time + "</li>";
    }

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>log</title>
    </head>
    <body>
    <ul>${times}</ul>
    </body>
    </html>`);
});

module.exports = router;
