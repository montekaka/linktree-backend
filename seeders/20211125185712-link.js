'use strict';
const {links} = require('./data-mock');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Links', links, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Links', null, {});
  }
};
