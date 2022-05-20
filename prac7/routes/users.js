var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var post = []
router.post('/addpost', function(req, res, next) {
    if (req.is('application/json') === null || req.is('application/json') === false) {
        res.status(412).send();
    } else {
        next();
    }
    var title = req.body.title;
    var content = req.body.content;
    post.push({ "title": title, "content": content })
    res.send()
});

module.exports = router;
