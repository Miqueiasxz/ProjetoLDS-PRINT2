const mysql = require('mysql2');
const express = require('express');
const app = express();
const { Router } = require('express');
const router = Router();
const path = require('path');
app.use(express.json());

app.use(router);

const port = 3000; // Porta em que o servidor irá escutar

app.listen(port, () => {
  console.log(`Servidor Express iniciado na porta ${port}`);
});

console.log('Tentando se conectar ao banco de dados...');

const connection = mysql.createConnection({
  host: '127.0.0.1', // ou o endereço do servidor MySQL se estiver em outro lugar
  port: 3308,        // substitua pela porta correta do seu servidor
  user: 'root',      // ou o nome de usuário correto
  password: '81885992',      // ou a senha correta, se houver
  database: 'restaurantes', // substitua "seu_banco_de_dados" pelo nome do seu banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
    // Você pode realizar consultas ou outras operações aqui
    // connection.query(...);
  }
});


// Configurar diretório estático
app.use(express.static(path.join(__dirname, '..', 'FrontEnd')));

// Rota para a página inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Tela Inicial.html'));
});

// Rota para a página de cadastro de restaurantes
router.get('/cadastroRestaurante', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/cadastroRestaurante.html'));
});

// Rota para a tela de login
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/LoginCliente.html'));
});

// Rota para a página de pedidos
router.get('/pedidos', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/TelaPedidos.html'));
});

// Rota para a página de perfis de restaurantes
router.get('/restaurantes', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/PerfisRestaurantes.html'));
});

// Rota para a tela de cadastro de cliente
router.get('/cadastroCliente', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/CadastroCliente.html'));
});

// Rota para a página do carrinho de compras
router.get('/carrinho', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Carrinho de Compras.html'));
});

// Rota para a página de controle de restaurante
router.get('/controleRestaurante', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Controle de restaurante.html'));
});
// Resto das rotas...

app.post('/login', (req, res) => {
  const { username, password } = req.body; // Supondo que você obtém os dados do formulário

  // ... lógica de autenticação ...

  // Se as credenciais forem válidas
  if (autenticacaoValida) {
    // Redirecionar para a página de controle de restaurante
    res.redirect('../FrontEnd/Tela Inicial.html'); // Use o mesmo caminho definido na rota
  } else {
    // Lidar com autenticação inválida
    res.send('Credenciais inválidas');
  }
});