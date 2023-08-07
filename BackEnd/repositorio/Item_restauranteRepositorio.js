import { restaurante } from "../banco/restaurante/item_restaurante"

export const criarRestaurante = async (data)=> {
   await restaurante.create({
    cod_item: data.cod_item,
    descricao: data.descricao,
    preco: data.preco,
    cod_restaurante: data.cod_restaurante,


    })
}