const sequelize = require('../index')

export const cliente = sequelize.define('cliente',{
    cod_cliente:{
        type: DataTypes.INT,
        allowNull: false
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    cpf: {
       type: DataTypes.STRING,
       allowNull: true
    },
    telefone: {
       type: DataTypes.STRING,
       allowNull: false
    },

   email: {
       type: DataTypes.STRING,
       allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
   },
   
})