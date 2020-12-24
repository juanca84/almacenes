'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotaIngreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotaIngreso.init({
    codigo: DataTypes.STRING,
    fecha_ingreso: DataTypes.DATE,
    estado: DataTypes.ENUM('ACTIVO', 'INACTIVO')
  }, {
    sequelize,
    modelName: 'NotaIngreso',
    tableName: 'notas_ingresos'
  });
  NotaIngreso.associate = function(models) {
    NotaIngreso.hasMany(models.EntradaSalida, {
      foreignKey: 'nota_ingreso_id',
    });
  };
  return NotaIngreso;
};