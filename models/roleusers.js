'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleUsers extends Model {
    static associate(models) {
    }
  };
  RoleUsers.init({
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
  },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'RoleUsers',
  });
  return RoleUsers;
};