var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var counter = 0;

router.get('/count', function(req, res,next) {
  counter++;
  res.send(`<html>

  <head>
    <title>Express</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
  </head>

  <body>
    <h1>${counter}</h1>
    <p>Welcome to Express</p>
  </body>

  </html>
  `);
});

module.exports = router;
