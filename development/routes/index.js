var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/team', function(req, res, next) {
  res.render('team');
});

router.get('/description', function(req, res, next) {
  res.render('description');
});

router.get('/safety', function(req, res, next) {
  res.render('safety');
});

module.exports = router;
