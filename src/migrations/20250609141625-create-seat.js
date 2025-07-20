'use strict';
/** @type {import('sequelize-cli').Migration} */
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = SEAT_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        refrences:{
          model:'Airplanes',
          key:'id'
        },
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.ENUM,
        allowNull:false,
        defaultValue:ECONOMY,
         values: [BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
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
    await queryInterface.dropTable('Seats');
  }
};