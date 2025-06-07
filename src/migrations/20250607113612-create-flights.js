'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightnumber: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
        model:'airplanes',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE' 
      },
      departureairportid: {
       type: Sequelize.STRING,
        allowNull:false,
        references: {
        model:'Airports',
        key:'code'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE' 
      },
      arrivalairportid: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
        model:'Airports',
        key:'code'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE' 
      },
      arrivaltime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      departuretime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      boardinggate: {
        type: Sequelize.STRING
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull:false,
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
    await queryInterface.dropTable('flights');
  }
};