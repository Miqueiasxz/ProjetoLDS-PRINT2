const sequelize = require('../index')

export const pedido = sequelize.define('pedido',{
    cod_pedido:{
        type: DataTypes.INT,
        allowNull: false
    },
    total: {
       type: DataTypes.FLOAT,
       allowNull: false
    },
    hora: {
       type: DataTypes.TIME,
       allowNull: false
    },
    data: {
       type: DataTypes.DATE,
       allowNull: false
    },

    cod_restaurante: {
        type: DataTypes.INT,
        allowNull: false
     },
    
     cod_cliente: {
      type: DataTypes.INT,
      allowNull: false
   },
   forma_pagamento: {
      type: DataTypes.STRING,
      allowNull: false
   },
  
})