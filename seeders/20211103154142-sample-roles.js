'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()
    await queryInterface.bulkInsert('Roles', [
      {id:  1, name: 'Administrators', createdAt: now, updatedAt: now},
      {id:  2, name: 'Moderators', createdAt: now, updatedAt: now},
      {id:  3, name: 'Users', createdAt: now, updatedAt: now},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
