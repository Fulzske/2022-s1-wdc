var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result', function(req, res, next) {
    //Connect to the database
    req.pool.getConnection( function(err,connection) {
      if (error) {
        res.sendStatus(500);
        return;
      }
      var query = "SHOW TABLES";
      connection.query(query, function(err, rows, fields) {
        connection.release(); // release connection
        if (error) {
          res.sendStatus(500);
          return;
        }
        res.json(rows); //send response
      });
    });
  });

router.post('/signup', function(req, res, next){
    req.pool.getConnection(function(error, connection){
        if (error){
            console.log(error);
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO Users (username, email, password) VALUES (?,?, SHA2(?,224));";
        connection.query(query, [req.body.username,
            req.body.email,
            req.body.password
        ],

        function(error, rows, fields) {
            connection.release(); // release connectio
            if(error){
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

module.exports = router;


