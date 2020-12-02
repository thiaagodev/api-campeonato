# API REST com Express.js 
API REST para realizar campeonatos de Rocket League com meus amigos, somente os melhores do bairro! neste serviço é possível criar players para competir, cadastrar novas partidas e o sistema calcula automaticamente a pontuação e o saldo de gols dos jogadores.

Este serviço está sendo consumido por um frontend feito em React para visualização e alteração da tabela.

Link do repositório do front end em React: https://github.com/viiniciusgs/tabela-campeonato

Link do site hospedado na vercel: https://rocketleague-campeonato.vercel.app

### Dados Técnicos 

Esta API foi feita utilizando o framework MVC Express.js e Mongoose para gerir o banco de dados MongoDB, para a realização de testes automátizados utilizei o Jest.


### Como executar?
Primeiro clone o repositório, rode um "npm i" na pasta raiz do projeto para instalar todas as dependências, após isso crie um banco de dados mongodb e adicione um arquivo .env com a seguinte variável ambiente: "MONGO_URL=<url_do_seu_banco>". Pronto, o projeto já pode ser executado! Rode um 'npm start' e aproveite a API.

OBS: Recomendo o uso do Insomnia para testar as rotas da API.
