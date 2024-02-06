'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     
      await queryInterface.bulkInsert('categories', [{
        name: 'visited',
        image:null,
        createAt:new Date(),
        updateAt:new Date()
      },
    {
      name: 'in-sale',
      image:null,
      createAt:new Date(),
        updateAt:new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkDelete('People', null, {});
     
  }
};
