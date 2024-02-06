'use strict';
const productsJSON: require ('../../data/productsDataBase.json')
 const productsDB = productsJSON.map(({name,price,discount,descripcion,category,image}) =>{
  return{
name: name.trim(),
price,
discount,
descripcion: descripcion.trim(),
image:null,
categoryId: category ==visited ? 1 : 2,
crateAt:new Data(),

  }
 })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
