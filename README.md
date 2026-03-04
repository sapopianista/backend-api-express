# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso backend? JavaScript
- O que é o Node.js? Ambiente/Runtime que vai rodar o JavaScript no terminal
- O que é o NPM? Gerenciador de pacotes padrão do node (Node Packet Manager)
npm init: cria o package.json
npm install cria package-look
- O que é o Express? Um Framework para desenvolver backend de aplicações web no Node.js
- O que é uma API? Meio de comunicação entre dois sistemas, que fornece informações para a interface do usuário
- O que é um Framework? Conjunto de recursos/ferramentas para solucionar um problema
- Como mudar o formato de importação de require (padrão common) para module? package.json type
- O que é HTTP (Hyper Text Transfer Protocol)? Protocolo de comunicação padrão da web
- Quais os métodos de requisição HTTP e para que serve cada um deles? 
    GET: para consultas, requisições, obter dados; 
    POST: inserções de dados, cadastros, registros; 
    PUT: para editar/atualizar dados que já estão na base de dados de forma completa; 
    PATCH: para edições/atualizações parciais de dados, diferente do put que é uma atualização completa;
    DELETE: rota que apaga/exclui algo do banco.
- Para que serve o --watch ao rodar o servidor? Fica observando os arquivos que compõem o projeto, quando alguma alteração for salva, ele reinicia o servidor
- Para que serve o Router no Express? para separar os arquivos em conjuntos de rotas com o mesmo endpoint, facilitando manutenção e escalabilidade
- Padrão de projeto MVC (Model-View-Controller):
    Model: Gerencia os dados, regras de negócio e lógica da aplicação, manipula as informações e interage com o banco de dados
    View: Responsável por enviar as ações do usuário para o Controller e exibir a interface do usuário (front-end)
    Controller: Atua como intermediário entre a View e o Model, recebendo as solicitações via View, processa usando o Model e retorna as respostas