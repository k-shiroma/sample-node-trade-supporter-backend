'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
      Price.belongsTo(models.Item);
    }
  };
  Price.init({
    price: DataTypes.FLOAT,
    checkedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: Sequelize.NOW // Date型では動作しない
    }
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};