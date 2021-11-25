'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ListItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      linkId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING
      },
      showTime: {
        type: Sequelize.DATE
      },
      soldOut: {
        type: Sequelize.BOOLEAN
      },
      onSale: {
        type: Sequelize.BOOLEAN
      },
      url: {
        type: Sequelize.STRING
      },
      embedPlayerUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ListItems');
  }
};