'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('crops', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      variety: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plantingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      harvestDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      farmId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'farms',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE', // Cascade delete for crops when a farm is deleted
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('crops');
  }
};
