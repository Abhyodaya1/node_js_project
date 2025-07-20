'use strict';
/** @type {import('sequelize-cli').Migration} */
const {BOOKING_STATUS} = require('../utils/common/enum');
module.exports = { 
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM,
        defaultValue: BOOKING_STATUS.INITIATED,
      values: Object.values(BOOKING_STATUS),
      },
      totalCost: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};