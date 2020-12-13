'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuentaContable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CuentaContable.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    estado: DataTypes.ENUM('ACTIVO', 'INACTIVO')
  }, {
    sequelize,
    modelName: 'CuentaContable',
    tableName: 'cuentas_contables'
  });
  CuentaContable.associate = function(models) {
    // associations can be defined here
    CuentaContable.hasMany(models.Articulo, {
      foreignKey: 'cuenta_contable_id',
    })
  };
  return CuentaContable;
};