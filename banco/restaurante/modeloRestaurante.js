const sequelize = require('sequelize')

const restaurante = sequelize.define('restaurante',{
     cod_restaurante:{
        type: DataTypes.INT,
        allowNull: false
    },
    razão_social: {
       type: DataTypes.STRING,
       allowNull: false
    },
    cnpj: {
       type: DataTypes.STRING,
       allowNull: false
    },
    nome_restaurante: {
       type: DataTypes.STRING,
       allowNull: false
    },
    nome_prorpietario: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: true
   },
   telefone: {
      type: DataTypes.STRING,
      allowNull: false
   },
   
   rua: {
      type: DataTypes.STRING,
      allowNull: false
   },
   numero: {
      type: DataTypes.STRING,
      allowNull: true
   },
   bairro: {
      type: DataTypes.STRING,
      allowNull: false
   },
   cidade: {
      type: DataTypes.STRING,
      allowNull: false
   },
   estado: {
      type: DataTypes.STRING,
      allowNull: false
   },
   cep: {
      type: DataTypes.STRING,
      allowNull: true
   },
   complemento: {
      type: DataTypes.STRING,
      allowNull: false
   },
     
})