'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
    }
  };
  Price.init({
    itemId: DataTypes.INTEGER,
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