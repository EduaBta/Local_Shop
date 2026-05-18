// Importa o framework Express (já com tipos, graças ao @types/express)
import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta que o servidor vai “escutar”
const PORT = 3000;

// Middleware: diz ao Express para interpretar o corpo das requisições como JSON
app.use(express.json());

// Define uma rota GET na raiz da API ('/')
app.get('/', (request, response) => {
  // Envia uma resposta no formato JSON
  return response.json({
    message: 'API do LocalShop rodando com sucesso!'
  });
});

// Inicia o servidor e mantém ele “ouvindo” requisições
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});