'use strict';

const { Model } = require('sequelize');
const Item = require('../models').Item;

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.Item);
      Recipe.hasMany(models.Material, {
        foreignKey: 'itemId'
      })
    }
  };
  Recipe.init({
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Item,
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};