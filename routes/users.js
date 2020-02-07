var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/luke', function(req, res, next) {
  res.send('respond with a resource for user luke');
});

module.exports = router;
