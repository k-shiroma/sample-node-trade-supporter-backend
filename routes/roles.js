const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;

router.get('/', function(req, res, next) {
  User.findAll({
    include: [{ model: User }],
  }).then(roles => {
    res.send(roles);
  });
});

module.exports = router;
