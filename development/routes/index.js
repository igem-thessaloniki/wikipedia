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

router.get('/experiments', function(req, res, next) {
  res.render('experiments');
})

router.get('/protocols', function(req, res, next) {
  res.render('protocols');
})

router.get('/attributions', function(req, res, next) {
  res.render('attributions');
})

module.exports = router;
