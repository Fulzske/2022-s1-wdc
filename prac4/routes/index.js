var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var date = "";
router.get('/last.txt', function(req, res, next) {
    res.send(date);
    date = new Date().toString();
});

var result;
var flag = 0;
router.get('/log.html', function(req, res, next) {
    date = new Date().toString();
    if (flag == 0) {
        result = "<li>" + date + "</li>";
    } else {
        result = result + "<li>" + date + "</li>";
    }

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>log</title>
    </head>
    <body>
    <ul>${result}</ul>
    </body>
    </html>`);

    flag++;
});

module.exports = router;
