'use strict';
const {links} = require('../mock_data');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Links', links, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Links', null, {});
  }
};
