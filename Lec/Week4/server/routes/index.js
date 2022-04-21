var express = require('express');
var router = express.Router();

let post_list=[
  { title: "hi", desc: "test", tags: ['tag'] },
  { title: "hi", desc: "test", tags: ['tag'] }
];

router.get('/test', function(req, res, next) {
  res.send('this is a test');
});


router.get('/posts', function(req, res, next) {
  res.json(post_list);
});


router.post('/new', function(req, res, next) {
  console.log(req.body);
  res.end();
});


module.exports = router;
