//  Instanciando libs (bibliotecas) -> sempre usar "const"
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//  Iniciando o servidor
const app = express();

//  Determinando o uso de JSON
app.use(express.json());

//  Conectando com o banco de dados FALTA COLOCAR O LINK DO SITE MongoDB Atlas
mongoose.connect(
    process.env.MONGO_CONECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

//  Fazendo o require da pasta models
requireDir('./models');

//  Fazendo o require das rotas
app.use('/api', require('./routers/index.routes'));

//  Iniciando o servidor
app.listen(3001);
console.log('Servidor rodando em http://localhost:3001');