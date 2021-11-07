const express = require('express');
const router = express.Router();
const Item = require('../models').Item;
const Recipe = require('../models').Recipe;

router.get('/', function(req, res, next) {
  Item.findAll({
    include: [{ model: Recipe }],
  }).then(items => {
    res.send(items);
  });
});

module.exports = router;