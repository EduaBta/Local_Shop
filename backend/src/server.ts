// Importa o framework Express (já com tipos, graças ao @types/express)
import express from 'express';
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta que o servidor vai “escutar”
const PORT = 3000;

// Middleware: diz ao Express para interpretar o corpo das requisições como JSON
app.use(express.json());

// Carregando as credenciais do arquivo JSON de forma segura
const serviceAccount = JSON.parse(
  readFileSync(
    new URL('../firebase-key.json', import.meta.url),
    'utf-8'
  )
);

// Iniciando o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Atalho para a instância do banco de dados Firebase
const db = admin.firestore();

// Rota para cadastrar nova loja
app.post('/lojas', async (request, response) => {
  try {
    const { nome, categoria, imagem, distancia, descricao } = request.body;

    // Validação dos campos obrigatórios
    if (!nome || !categoria || !distancia) {
      return response.status(400).json({
        error: 'Campos obrigatórios ausentes',
      });
    }

    // Objeto da nova loja
    const novaLoja = {
      nome,
      categoria,
      imagem: imagem || '',
      distancia,
      descricao: descricao || '',
    };

    // Salva no Firestore dentro da coleção 'lojas'
    const docRef = await db.collection('lojas').add(novaLoja);

    // Retorna o objeto criado junto com o ID gerado
    return response.status(201).json({
      id: docRef.id,
      ...novaLoja,
    });

  } catch (error) {
    return response.status(500).json({
      error: 'Erro ao salvar no banco.',
    });
  }
});



// Define uma rota GET na raiz da API ('/')
/*
app.get('/', (request, response) => {
  // Envia uma resposta no formato JSON
  return response.json({
    message: 'API do LocalShop rodando com sucesso!'
  });
});
*/

// Inicia o servidor e mantém ele “ouvindo” requisições

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
