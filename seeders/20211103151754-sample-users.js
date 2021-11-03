'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()
    await queryInterface.bulkInsert('Users', [
      {id:  1, username: 'admin', password: 'admin', name: '管理者1', createdAt: now, updatedAt: now},
      {id:  2, username: 'mod', password: 'mod', name: 'モデレーター1', createdAt: now, updatedAt: now},
      {id:  3, username: 'user', password: 'user', name: 'ユーザ1', createdAt: now, updatedAt: now},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
