const express = require('express');
const { Router } = require('express');
const router = Router();
const path = require('path');

// Rota para a página inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Tela Inicial.html'));
});

// Rota para o cadastro de restaurantes
router.get('/cadastroRestaurante', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/CadastroRestaurante.html'));
});

// Resto das rotas...

module.exports = router;
