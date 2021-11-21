const express = require('express');
const router = express.Router();
const Price = require('../models').Price;
const Item = require('../models').Item;

router.get('/', function(req, res, next) {
  Price.findAll().then(prices => {
    res.send(prices);
  });
});

router.get('/:itemId', function(req, res, next) {
  console.log('---[prices/:itemId] called. req.params=', req.params)
  const itemId = req.params.itemId;
  Price.findAll({
    include: [Item],
    where: {id: itemId}
  }).then(prices => {
    res.send(prices);
  });
});

module.exports = router;