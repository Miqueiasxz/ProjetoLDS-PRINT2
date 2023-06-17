const sequelize = require('sequelize')

const item_restaurante = sequelize.define('item_restaurante',{
    cod_item:{
        type: DataTypes.INT,
        allowNull: false
    },
    descricao: {
       type: DataTypes.STRING,
       allowNull: true
        },
        preco: {
        type: DataTypes.FLOAT,
        allowNull: false
        },
        cod_restaurante: {
            type: DataTypes.INT,
            allowNull: false
            },
            
    
})