const express = require('express');
const mysql = require('mysql');
const {Router} = require('express')
const app = express();
const port = 3308;
const router = Router()
// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1:3308',
  user: 'root', 
  password: '81885992',
  database: 'restaurante'
});

// Rota para lidar com o cadastro
router.post('/cadastroRestaurante', (req, res) => {
  // Extrai os dados enviados pelo formulário
  const { razaoSocial, cnpj, nomeRestaurante, nomeProprietario, email, telefone, cep, rua, numero, bairro, cidade, estado, complemento, senha } = req.body;

  // Cria a query SQL para inserir os dados na tabela adequada
  const query = `INSERT INTO restaurante (razao_social, cnpj, nome_restaurante, nome_proprietario, email, telefone, cep, rua, numero, bairro, cidade, estado, complemento, senha) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // Executa a query com os dados fornecidos
  connection.query(query, [razaoSocial, cnpj, nomeRestaurante, nomeProprietario, email, telefone, cep, rua, numero, bairro, cidade, estado, complemento, senha], (error, results) => {
    if (error) {
      console.error('Erro ao cadastrar restaurante:', error);
      res.status(500).send('Erro ao cadastrar restaurante. Por favor, tente novamente mais tarde.');
    } else {
      console.log('Restaurante cadastrado com sucesso!');
      res.status(200).send('Restaurante cadastrado com sucesso!');
    }
  });
});

// Rota para lidar com o cadastro
router.post('/cadastroRestaurante', (req, res) => {

  // Cria a query SQL para inserir os dados na tabela adequada
  const query = `INSERT INTO restaurante (razao_social, cnpj, nome_restaurante, nome_proprietario, email, telefone, cep, rua, numero, bairro, cidade, estado, complemento, senha) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // Executa a query com os dados fornecidos
  connection.query(query, [razaoSocial, cnpj, nomeRestaurante, nomeProprietario, email, telefone, cep, rua, numero, bairro, cidade, estado, complemento, senha], (error, results) => {
    if (error) {
      console.error('Erro ao cadastrar restaurante:', error);
      res.status(500).send('Erro ao cadastrar restaurante. Por favor, tente novamente mais tarde.');
    } else {
      console.log('Restaurante cadastrado com sucesso!');
      res.status(200).send('Restaurante cadastrado com sucesso!');
    }
  });
});

app.get('/listagemRestaurante')
app.post('/cadastroPedido')
app.post('/loginCliente')
app.post('/loginRestaurente')
app.get('/listagemPedidos')
app.post('/cadastroCliente')
app.post('/listagemDeProdutos')
app.post('/cadstroDeProdutos')


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
