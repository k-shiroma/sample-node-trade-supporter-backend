const express = require('express');
const router = express.Router();
const db = require('../models/index');

/**
 * アイテム全件取得.
 */
router.get('/', function(req, res, next) {
  try {
    console.log('[get /items] called.')
    db.Item.findAll({
      include: [{
        model: db.Recipe,
        include: [{
          model: db.Material,
          include: [db.Item]
        }]
      }],
      order: [
        ['id', 'ASC']
      ]
    }).then(items => {
      res.send(items);
    });
  } catch(error) {
    console.log('[get /items] error.', error)
    res.status(400).json({message: 'error'})
  }
});

/**
 * 指定された ID のアイテムを取得.
 */
router.get('/:itemId', function(req, res, next) {
  try {
    console.log('[get /items/:itemId] called. req.params=', req.params)
    const itemId = (req.params.itemId) ? parseInt(req.params.itemId) : null;
    db.Item.findByPk(itemId, {
      include: [{
        model: db.Recipe,
        include: [{
          model: db.Material,
          include: [db.Item]
        }]
      }]
    }).then(item => {
      res.json(item)
    })
  } catch(error) {
    console.log('[get /items/:itemId] error.', error)
    res.status(400).json({message: 'error'})
  }
});

/**
 * アイテム登録.
 * アイテムに価格が設定されている場合、価格も併せて登録.
 * curl -X POST -H "Content-Type: application/json" -d '{"name":"testItem", "price":"1.2", "checkedAt": "2021/11/08 12:34:56"}' localhost:3000/items
 */
router.post('/', function(req, res, next) {
  console.log('[post /items] called. req.body=', req.body)
  const name = req.body.name
  const price = (req.body.price) ? parseFloat(req.body.price) : null
  const checkedAt = (req.body.checkedAt) ? new Date(req.body.checkedAt) : null
  console.log('[post /items] name=', name, ', price=', price, ', checkedAt=', checkedAt)
  if(!name) {
    res.status(400).json({message: 'Item.name is empty.'})
    return
  }
  if(price === NaN) {
    res.status(400).json({message: 'Item.price is not number.'})
    return
  }
  if(checkedAt != null && Number.isNaN(checkedAt.getTime())) {
    res.status(400).json({message: 'Item.checkedAt is invalid date.'})
    return
  }
  try {
    db.sequelize.transaction(async (t) => {
      const item = await db.Item.create({
        name: name,
        price: price
      }, {transaction: t});
      let priceModel = null
      if(price) {
        priceModel = await db.Price.create({
          itemId: item.id,
          price: price,
          checkedAt: (checkedAt) ? checkedAt : new Date()
        }, {transaction: t});
      }
      console.log('---[post items/] succeed. item=', item, ', price=', priceModel);
      res.json({message: 'ok'});
    })
  } catch (error) {
    console.log('---[post items/] error.', error);
    res.status(400).json({
      error: {
        message: 'error',
        error: error
      }
    });
  }
});

/**
 * アイテム更新.
 */
router.put('/', function(req, res, next) {
  console.log('[put /items] called. req.body=', req.body)
  const itemId = parseInt(req.body.id)
  const name = req.body.name
  const price = (req.body.price) ? parseFloat(req.body.price) : null
  const checkedAt = (req.body.checkedAt) ? new Date(req.body.checkedAt) : null
  console.log('[put /items] itemId=', itemId, ', name=', name, ', price=', price, ', checkedAt=', checkedAt)
  if(!req.body.id) {
    res.status(400).json({message: 'Item.id not found.'})
    return
  }
  if(req.body.id === NaN) {
    res.status(400).json({message: 'Item.id is not number.'})
    return
  }
  if(!name) {
    res.status(400).json({message: 'Item.name is empty.'})
    return
  }
  if(price === NaN) {
    res.status(400).json({message: 'Item.price is not number.'})
    return
  }
  if(checkedAt != null && Number.isNaN(checkedAt.getTime())) {
    res.status(400).json({message: 'Item.checkedAt is invalid date.'})
    return
  }
  try {
    // 既存データ取得
    const item = db.Item.findByPk()
    db.sequelize.transaction(async (t) => {
      const item = await db.Item.create({
        name: name,
        price: price
      }, {transaction: t});
      let priceModel = null
      if (price) {
        priceModel = await db.Price.create({
          itemId: item.id,
          price: price,
          checkedAt: (checkedAt) ? checkedAt : new Date()
        }, {transaction: t});
      }
      console.log('---[put items/] succeed. item=', item, ', price=', priceModel);
      res.json({message: 'ok'});
    })
  } catch (error) {
    console.log('---[put items/] error.', error);
    res.status(400).json({
      error: {
        message: 'error',
        error: error
      }
    });
  }
})

module.exports = router;