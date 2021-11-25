'use strict';
const {listItems} = require('../mock_data');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ListItems', listItems, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ListItems', null, {});
  }
};
