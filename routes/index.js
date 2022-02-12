var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:lang/', function(req, res, next) {
  res.setLocale(req.params.lang);
  res.render('index');
});

router.get('/', function(req, res, next) {
  res.redirect('/rs/');
});

module.exports = router;
