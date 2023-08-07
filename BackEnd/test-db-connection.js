const mysql = require('mysql2');

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
