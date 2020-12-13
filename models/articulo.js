'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Articulo.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cuenta_contable_id: DataTypes.INTEGER,
    estado: DataTypes.ENUM('ACTIVO', 'INACTIVO')
  }, {
    sequelize,
    modelName: 'Articulo',
    tableName: 'articulos'
  });
  Articulo.associate = function(models) {
    // associations can be defined here
    Articulo.belongsTo(models.CuentaContable, {
      foreignKey: 'cuenta_contable_id',
      onDelete: 'CASCADE'
    })
  };
  return Articulo;
};