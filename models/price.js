'use strict';

const { Model } = require('sequelize');
const Item = require('../models').Item;

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
      Price.belongsTo(models.Item);
    }
  };
  Price.init({
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Item,
        key: 'id'
      }
    },
    price: DataTypes.FLOAT,
    checkedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};