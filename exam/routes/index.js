var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
    if ('username' in req.body &&
        'email' in req.body &&
        'password' in req.body
    ){
        console.log(req.body);
        req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO Users (username, email, password) VALUES (?,?,?, SHA2(?,224));";
        console.log("very good");
        connection.query(query, [req.body.user_name,
                req.body.email,
                req.body.password
            ],
            function(err, rows, fields) {
                connection.release(); // release connection
                if (err) {
                    // console.log();
                    res.sendStatus(500);
                    console.log("bad");
                    return;
                }
                res.end();
            });

    });

    }
    else{
        res.sendStatus(402);
    }
});


module.exports = router;


