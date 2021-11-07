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
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Model.Item,
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