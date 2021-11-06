'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.hasMany(models.Price, {
        foreignKey: 'itemId'
      })
      Item.hasMany(models.Recipe, {
        foreignKey: 'itemId'
      })
      Item.hasMany(models.Material, {
        foreignKey: 'itemId'
      })
    }
  };
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};