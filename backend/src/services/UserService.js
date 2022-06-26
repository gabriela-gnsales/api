//  Fazendo uso da tabela de Usuário através do mongoose
const mongoose = require('mongoose');
//  Acessando a tabela de Usuário
const User = mongoose.model('User');

const createUser = async (name, telephone, email, password) => {
    return await User.create(user);
};

//  Tornando as funções disponíveis para outros arquivos
module.exports = {
    createUser,
  
  
  }