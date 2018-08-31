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

router.get('/public_engagement', function(req, res, next) {
  res.render('public-engagement');
})

router.get('/interlab', function(req, res, next) {
  res.render('interlab');
})

router.get('/notebook', function(req, res, next) {
  res.render('notebook');
})


module.exports = router;
