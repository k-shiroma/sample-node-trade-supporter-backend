const express = require('express');
const router = express.Router();
const Material = require('../models').Material;
const Item = require('../models').Item;

router.get('/', function(req, res, next) {
  Material.findAll({
    include: [{ model: Item }],
  }).then(matelials => {
    res.send(matelials);
  });
});

module.exports = router;