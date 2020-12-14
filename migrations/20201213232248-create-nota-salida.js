'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notas_salidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_salida: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estado: {
        type: Sequelize.ENUM('ACTIVO', 'INACTIVO'),
        defaultValue: 'ACTIVO',
        allowNull: false
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
    await queryInterface.dropTable('notas_salidas');
  }
};