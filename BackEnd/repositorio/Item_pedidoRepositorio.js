import { restaurante } from "../banco/restaurante/item_pedido"

export const criarRestaurante = async (data)=> {
   await restaurante.create({
    cod_item: data.cod_item,
    cod_pedido: data.cod_pedido,
    quantidade: data.quantidade,



    })
}