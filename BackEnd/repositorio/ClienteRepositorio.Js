import { restaurante } from "../banco/restaurante/cliente"

export const criarRestaurante = async (data)=> {
   await restaurante.create({
    cod_cliente: data.cod_cliente,
    nome: data.nome,
    cpf: data.cpf,
    telefone: data.telefone,
    email: data.email,
    senha: data.senha,


    })
}