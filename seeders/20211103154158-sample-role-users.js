'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()
    await queryInterface.bulkInsert('RoleUsers', [
      {roleId:  1, userId:  1, createdAt: now, updatedAt: now},
      {roleId:  2, userId:  2, createdAt: now, updatedAt: now},
      {roleId:  3, userId:  3, createdAt: now, updatedAt: now},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RoleUsers', null, {});
  }
};
