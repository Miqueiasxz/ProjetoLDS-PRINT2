import { restaurante } from "../banco/restaurante/modeloRestaurante"

export const criarRestaurante = async (data)=> {
   await restaurante.create({
       cod_restaurante: data.cod_restaurante,
       razao_social: data.razão_social,
       cnpj: data.cnpj,
       nome_restaurante: data.nome_restaurante,
       nome_prorpietario: data.nome_prorpietario,
       email: data.email,
       telefone: data.telefone,
       rua: data.rua,
       numero: data.numero,
       bairro: data.bairro,
       cidade: data.cidade,
       estado: data.estado,
       cep: data.cep,
       complemento: data.complemento,

    })
}