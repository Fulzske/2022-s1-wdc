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
    req.pool.getConnection(function(err, connection){
        if (err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query = `INSERT INTO users (username, email, password) VALUES (?,?, SHA2(?,224));`;
        connection.query(query, [req.body.username, req.body.email, req.body.password], function(err, rows, fields) {
            connection.release(); // release connection
            if(err){
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    });
});

router.post('/login', function(req, res, next) {
  req.pool.getConnection(function(err, connection) {
      if (err) {
          res.sendStatus(500);
          return;
      }
      var query = `SELECT id, username, name, email FROM Users WHERE username= ? AND password = SHA2(?,224);`;
      connection.query(query, [req.body.username, req.body.password], function(err, rows, fields) {
          connection.release(); // release connection
          if (err) {
              res.sendStatus(500);
              return;
          }
          if (rows.length > 0){
              req.session.user = rows[0];
              currentUser = rows[0];
              res.json(rows[0]);
          } else {
              res.sendStatus(401);
          }
      });
  });
});

module.exports = router;


