'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
    }
  };
  Material.init({
    itemId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};