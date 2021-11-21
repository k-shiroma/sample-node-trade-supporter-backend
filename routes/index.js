var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'Server running!'});
});

module.exports = router;
