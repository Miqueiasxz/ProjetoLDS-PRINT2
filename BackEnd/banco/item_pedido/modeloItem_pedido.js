const sequelize = require('../index')

const item_pedido = sequelize.define('item_pedido',{
    cod_item:{
        type: DataTypes.INT,
        allowNull: false
    },
    cod_pedido:{
        type: DataTypes.INT,
        allowNull: false
    },
    quantidade: {
       type: DataTypes.INT,
       allowNull: false
    },
    
    
})