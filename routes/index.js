var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:lang/', function(req, res, next) {
  res.setLocale(req.params.lang);
  res.render('index');
});

module.exports = router;
