const express = require('express');
const router = express.Router();
const Price = require('../models').Price;

router.get('/', function(req, res, next) {
  Item.findAll().then(prices => {
    res.send(prices);
  });
});

module.exports = router;