var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/brew', function(req, res, next) {
  var drink = req.query.drink;
  if (drink == "tea") {
      res.send("A delicious cup of tea!");
  } else if (drink == "coffee") {
      res.sendStatus(418);
  } else {
      res.sendStatus(400);
  }
});

let first = false;
var message;
router.post('/pass-it-on', function(req, res, next) {
    if (req.body.message == "") {
        res.sendStatus(400);
    } else {
        if (first == false) {
            res.send("first");
            first = true;
            message = req.body.message;
        } else {
            res.send(message);
            message = req.body.message;
        }
    }
});

router.post('/combine', function(req, res, next) {
  message = "";
  for (var i = 0; i < req.body.lines.length; i++) {
      message += req.body.lines[i] + req.body.suffix + '\n';
  }
  res.send(message);
});

router.post('/users/addpost', function(req, res, next) {
    

});



