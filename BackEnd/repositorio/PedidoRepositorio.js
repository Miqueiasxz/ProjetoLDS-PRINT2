import { restaurante } from "../banco/restaurante/pedido"

export const criarRestaurante = async (data)=> {
   await restaurante.create({
          cod_pedido: data.cod_pedido,
          total: data.total,
          hora: data.hora,
          data: data.data,
          cod_restaurante: data.cod_restaurante,
          cod_cliente: data.cod_cliente,
          forma_pagamento: data.forma_pagamento,



    })
}