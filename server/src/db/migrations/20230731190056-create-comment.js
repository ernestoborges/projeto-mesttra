'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comment', {
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      meetingId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
      },
      author: {
        type: Sequelize.UUIDV4,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      replyTo: {
        type: Sequelize.UUIDV4,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comment');
  }
};