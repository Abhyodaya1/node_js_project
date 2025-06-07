'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.addConstraint(
  'Airports', 'cityID',  {
    type: 'foreign key',
    fields: ['cityID'],
    name: 'fk_city_airport', // optional, but useful for debugging
    references: {
      table: 'Cities',
      field: 'id'
    },
    onDelete: 'cascade', // or 'SET NULL' or 'NO ACTION'
    onUpdate: 'cascade' // or 'SET NULL' or 'NO ACTION'
  }
);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Airports', 'fk_city_airport'
    );
  }
};
