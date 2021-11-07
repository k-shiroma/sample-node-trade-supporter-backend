'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.belongsTo(models.Item);
      Material.belongsTo(models.Recipe);
    }
  };
  Material.init({
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Model.Item,
        key: 'id'
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Model.Recipe,
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};