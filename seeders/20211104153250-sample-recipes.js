'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Recipes', [
      {id:1, itemId:29, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:2, itemId:35, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:3, itemId:47, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:4, itemId:47, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:5, itemId:54, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:6, itemId:55, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:7, itemId:26, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:8, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:9, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:10, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:11, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:12, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:13, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:14, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:15, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:16, itemId:81, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:17, itemId:140, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:18, itemId:8, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:19, itemId:120, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:20, itemId:98, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:21, itemId:39, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:22, itemId:150, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:23, itemId:84, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:24, itemId:12, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:25, itemId:76, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:26, itemId:118, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:27, itemId:141, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:28, itemId:99, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:29, itemId:66, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:30, itemId:18, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:31, itemId:5, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:32, itemId:5, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:33, itemId:20, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:34, itemId:19, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:35, itemId:65, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:36, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:37, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:38, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:39, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:40, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:41, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:42, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:43, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:44, itemId:111, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:45, itemId:25, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:46, itemId:25, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:47, itemId:35, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:48, itemId:59, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:49, itemId:15, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:50, itemId:87, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:51, itemId:87, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:52, itemId:87, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:53, itemId:87, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:54, itemId:45, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:55, itemId:64, quantity:1, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:56, itemId:86, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:57, itemId:113, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:58, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:59, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:60, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:61, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:62, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:63, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:64, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:65, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:66, itemId:126, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:67, itemId:109, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:68, itemId:79, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:69, itemId:2, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:70, itemId:10, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:71, itemId:78, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:72, itemId:107, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:73, itemId:110, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:74, itemId:110, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:75, itemId:11, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:76, itemId:11, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:77, itemId:60, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:78, itemId:134, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:79, itemId:134, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:80, itemId:80, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:81, itemId:23, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:82, itemId:28, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:83, itemId:31, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:84, itemId:31, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:85, itemId:36, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:86, itemId:38, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:87, itemId:95, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:88, itemId:57, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:89, itemId:72, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:90, itemId:93, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:91, itemId:116, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:92, itemId:51, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:93, itemId:69, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:94, itemId:6, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:95, itemId:117, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:96, itemId:48, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:97, itemId:61, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:98, itemId:34, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:99, itemId:138, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:100, itemId:130, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:101, itemId:125, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:102, itemId:91, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:103, itemId:53, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:104, itemId:4, quantity:5, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:105, itemId:100, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:106, itemId:103, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:107, itemId:105, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:108, itemId:135, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:109, itemId:152, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:110, itemId:129, quantity:5, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:111, itemId:58, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:112, itemId:44, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:113, itemId:127, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:114, itemId:137, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:115, itemId:14, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:116, itemId:89, quantity:5, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:117, itemId:131, quantity:5, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:118, itemId:3, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:119, itemId:13, quantity:4, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:120, itemId:41, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:121, itemId:90, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:122, itemId:123, quantity:3, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:123, itemId:114, quantity:2, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};