var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:lang/', function(req, res, next) {
  console.log(req.params.lang);
  res.setLocale(req.params.lang);
  res.render('index');
});

module.exports = router;
