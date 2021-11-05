'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
    }
  };
  Recipe.init({
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};