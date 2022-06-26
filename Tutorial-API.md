# PASTAS

## src:
**controllers:** responsável por todas as chamadas de métodos

**models:** responsável pela modelagem de dados

**services:** responsável por todas as regras de negócio em relação à camada de serviços, de bancos de dados...

**utils:** armazena todas as funções de uso comum

# ARQUIVOS

**doc:** responsável pelo swagger (um framework composto por diversas ferramentas que, independente da linguagem, auxilia a descrição, consumo e visualização de serviços de uma API REST).

# TUTORIAL

<!-- VERIFICAR ITENS ANTERIORES -->
* `npm init`
* alterar no package.json o "description" - EX: "Aplicação final Backend simulador de corrida"
* subir o servidor usando o express: `npm i express`
* configurar o nodemon (forma de mexer no código sem ter que ficar subindo o servidor a cada alteração, ele reconhece todas as alterações e sobe o servidor de forma automática): `npm i -D nodemon` (instalado apenas a nível de desenvolvimento, isto é, não roda essas dependências a nível de produção -> cria um "devDependencies" no package.json = ambiente de dev)
* criar um script de "dev" no package.json setando o nodemon: "dev": "nodemon --inspect scr/server.js" -> colocar o inspect porque a aplicação será debugada
* rodar a aplicação `npm run dev` -> para rodar o que está na flag "dev"
* subir o servidor -> arquivo server.js
* instalar biblioteca mongoose para utilizar/manipular o mongoDB no node, ajudar o uso de schemas no node: `npm i mongoose`
* conectar com o banco de dados -> site MongoDB Atlas <!-- VERIFICAR COMO FAZER ESSA PARTE DA CONCECÇÃO (aula 08/06/22 - 59 min) -->
* instalar biblioteca que faz o require dos schemas para deixá-los disponíveis para uso na aplicação: `npm i require-dir`


### OBS:
**flags + comuns:**
* -g (instala a nível global, na sua máquina, não só a nível de aplicação)
* -d (instala somente a nível de aplicação, no localhost)
* --force (força a instação mascarando os erros, executando de alguma forma, usado quando tem uma aplicação)
