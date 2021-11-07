const express = require('express');
const router = express.Router();
const Recipe = require('../models').Recipe;
const Material = require('../models').Material;

router.get('/', function(req, res, next) {
  Recipe.findAll({
    include: [{ model: Material }],
  }).then(recipes => {
    res.send(recipes);
  });
});

module.exports = router;