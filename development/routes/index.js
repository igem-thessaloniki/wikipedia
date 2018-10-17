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

router.get('/attributions', function(req, res, next) {
  res.render('attributions');
})

router.get('/model', function(req, res, next) {
  res.render('model');
})

router.get('/model_tale', function(req, res, next) {
  res.render('model_tale');
})

router.get('/model_dcas9', function(req, res, next) {
  res.render('model_dcas9');
})

router.get('/model_nar', function(req, res, next) {
  res.render('model_nar');
})

router.get('/human_practices', function(req, res, next) {
  res.render('human_practices');
})

router.get('/design', function(req, res, next) {
  res.render('design');
})

router.get('/collabs', function(req, res, next) {
  res.render('collabs');
})

module.exports = router;
