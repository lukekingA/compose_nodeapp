var express = require('express');
var router = express.Router();
const pg = require('postgres');

const db = pg({
  port: 3500,
  username: "postgres",
  password: "postgres",
  dataabase: "webapp"
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.sendfile('views/home.html');
});

router.get('/pgcall', function(req, res, next) {
  var val = await db`select first_name from persons where first_name = 'Steve';`
  res.send(val);
});

module.exports = router;
