'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotaSalida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotaSalida.init({
    codigo: DataTypes.STRING,
    fecha_salida: DataTypes.DATE,
    estado: DataTypes.ENUM('ACTIVO', 'INACTIVO')
  }, {
    sequelize,
    modelName: 'NotaSalida',
    tableName: 'notas_salidas'
  });
  NotaSalida.associate = function(models) {
    NotaSalida.hasMany(models.EntradaSalida, {
      foreignKey: 'nota_salida_id',
    });
  };
  return NotaSalida;
};