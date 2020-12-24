'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EntradaSalida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EntradaSalida.init({
    articulo_id: DataTypes.INTEGER,
    nota_ingreso_id: DataTypes.INTEGER,
    nota_salida_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL,
    tipo: DataTypes.ENUM('INGRESO', 'SALIDA'),
    estado: DataTypes.ENUM('ACTIVO', 'INACTIVO')
  }, {
    sequelize,
    modelName: 'EntradaSalida',
    tableName: 'entradas_salidas',
    name: {
      singular: "entrada_salida",
      plural: "entradas_salidas"
    }
  });
  EntradaSalida.associate = function(models) {
    EntradaSalida.belongsTo(models.NotaIngreso, {
      foreignKey: 'nota_ingreso_id',
      onDelete: 'CASCADE'
    });
    EntradaSalida.belongsTo(models.Articulo, {
      foreignKey: 'articulo_id',
      onDelete: 'CASCADE'
    });

  };
  return EntradaSalida;
};