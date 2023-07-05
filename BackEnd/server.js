const express = require('express');
const app = express();
const { Router } = require('express');
const router = Router();
const path = require('path');

// Configurar diretório estático
app.use(express.static(path.join(__dirname, '..', 'FrontEnd')));

// Rota para a página inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Tela Inicial.html'));
});

// Resto das rotas...

app.use(router);

const port = 3000; // Porta em que o servidor irá escutar

app.listen(port, () => {
  console.log(`Servidor Express iniciado na porta ${port}`);
});
