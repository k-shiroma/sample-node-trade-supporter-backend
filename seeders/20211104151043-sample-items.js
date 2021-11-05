'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {id:1, name:'Apple', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:2, name:'Apple Buns', price:72, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:3, name:'Apple Pie', price:150, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:4, name:'Baabaa Couscous', price:162, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:5, name:'Bacon', price:22, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:6, name:'Baguette', price:103, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:7, name:'Barley', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:8, name:'Barley malt', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:9, name:'Beef', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:10, name:'Beef bouillon', price:78, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:11, name:'Beef steak', price:72, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:12, name:'Beer', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:13, name:'Beer Pie', price:148, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:14, name:'Beer pancakes', price:158, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:15, name:'Berries in honey', price:59, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:16, name:'Big cauldron', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:17, name:'Big potato', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:18, name:'Boiled Chicken', price:40, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:19, name:'Boiled Eggs', price:34, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:20, name:'Boiled Potatoes', price:42, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:21, name:'Boiled eggs', price:34, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:22, name:'Bones', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:23, name:'Borscht', price:101, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:24, name:'Branch', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:25, name:'Bread', price:22, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:26, name:'Brewed honey', price:31, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:27, name:'Brewing tank', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:28, name:'Bubble and squeak', price:121, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:29, name:'Butter', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:30, name:'Cabbage', price:21, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:31, name:'Cake with Giblets', price:121, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:32, name:'Campfire', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:33, name:'Carrot', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:34, name:'Chebureki', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:35, name:'Cheese', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:36, name:'Cheese Buns', price:109, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:37, name:'Chicken', price:21, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:38, name:'Chorba', price:99, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:39, name:'Cider', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:40, name:'Codfish', price:21, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:41, name:'Cookies', price:146, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:42, name:'Cooking buildings', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:43, name:'Cooking buildings and Cooking pot', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:44, name:'Cottage Pie', price:154, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:45, name:'Crispy Chicken', price:55, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:46, name:'Crushed oat', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:47, name:'Dough', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:48, name:'East Fish Soup', price:115, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:49, name:'Edible berries', price:35, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:50, name:'Egg', price:13, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:51, name:'Egg salad', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:52, name:'Empty bottle', price:31, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:53, name:'Fat Fish Soup', price:158, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:54, name:'Fermented apple juice', price:49, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:55, name:'Fermented grape Juice', price:49, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:56, name:'Fish', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:57, name:'Fish Bullion', price:111, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:58, name:'Fish Madness', price:156, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:59, name:'Fish Patty', price:47, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:60, name:'Fish Pottage', price:76, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:61, name:'Fish Soup', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:62, name:'Fish bullion', price:111, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:63, name:'Fresh water', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:64, name:'Fried Eggs', price:47, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:65, name:'Fried Fish', price:32, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:66, name:'Fried Meat', price:32, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:67, name:'Fried meat', price:32, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:68, name:'Grapes', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:69, name:'Greatberry Pie', price:115, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:70, name:'Green peas', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:71, name:'Herring', price:21, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:72, name:'Highlanders Sausage', price:125, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:73, name:'Honey', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:74, name:'Intestines', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:75, name:'Kitchen', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:76, name:'Lager', price:97, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:77, name:'Lamb', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:78, name:'Lamb bouillon', price:78, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:79, name:'Lean Pottage', price:76, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:80, name:'Lean Stew', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:81, name:'Malt', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:82, name:'Marbled beef', price:31, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:83, name:'Marbled pork', price:31, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:84, name:'Mead', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:85, name:'Meat', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:86, name:'Meat Patty', price:47, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:87, name:'Meat Stew', price:45, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:88, name:'Milk', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:89, name:'Minestrone', price:152, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:90, name:'Mixed Porridge', price:160, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:91, name:'Mumkin Borscht', price:160, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:92, name:'Mushroom', price:23, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:93, name:'Mushrooms Stew', price:115, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:94, name:'Mutton', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:95, name:'North Fish Soup', price:117, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:96, name:'Nuts', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:97, name:'Oat', price:13, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:98, name:'Oat Malt', price:23, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:99, name:'Oat stout', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:100, name:'Oatmeal, sir!', price:158, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:101, name:'Onion', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:102, name:'Oven', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:103, name:'Pea Soup', price:148, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:104, name:'Peas', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:105, name:'Peceno Veprevo Koleno', price:174, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:106, name:'Pike', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:107, name:'Pizza', price:62, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:108, name:'Pork', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:109, name:'Pork bouillon', price:78, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:110, name:'Pork with Vegetables', price:92, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:111, name:'Porridge', price:28, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:112, name:'Potato', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:113, name:'Potato with Mushrooms', price:69, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:114, name:'Pumpernickel', price:156, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:115, name:'Rabbit', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:116, name:'Rassolnik', price:105, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:117, name:'Ravioli', price:101, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:118, name:'Red ale', price:101, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:119, name:'Rye', price:13, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:120, name:'Rye Malt', price:23, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:121, name:'Rye flour', price:25, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:122, name:'Salmon', price:19, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:123, name:'Samsa', price:142, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:124, name:'Sardine', price:21, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:125, name:'Sardine Stew', price:111, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:126, name:'Sausage', price:41, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:127, name:'Shchi', price:142, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:128, name:'Small onion', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:129, name:'Solyanka', price:148, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:130, name:'South Fish Soup', price:117, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:131, name:'Stuffed Rabbit', price:160, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:132, name:'Sugar carrot', price:31, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:133, name:'Trout', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:134, name:'Vegetable Patty', price:82, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:135, name:'Vegetable stew', price:160, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:136, name:'Water', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:137, name:'Waterzooi', price:150, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:138, name:'West Fish Soup', price:115, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:139, name:'Wheat', price:17, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:140, name:'Wheat malt', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:141, name:'White Beer', price:107, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:142, name:'White beer', price:107, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:143, name:'White cabbage', price:33, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:144, name:'White flour', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:145, name:'White meat', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:146, name:'Wild barley', price:29, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:147, name:'Wild oat', price:23, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:148, name:'Wild rye', price:23, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:149, name:'Wild wheat', price:27, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:150, name:'Wine', price:15, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:151, name:'Wine press', price:0, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
      {id:152, name:'Yorkshire Pudding', price:166, createdAt:'2021/11/06', updatedAt:'2021/11/06'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
