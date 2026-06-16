# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso backend? JavaScript

- O que é o Node.js? Ambiente/Runtime que vai rodar o JavaScript no terminal

- O que é o NPM? Gerenciador de pacotes padrão do node (Node Packet Manager)
    npm init: inicializa o node no projeto criando o package.json e iniciando o CLI (comandos de  terminal)
    npm install: cria a pasta node_modules ao instalar o primeiro pacote, cria package-look e baixa as dependencias do projeto na pasta node_modules
    npm i +nomedopacote: grava o pac versao do pacote como dependencia no packet.json e instala o pacote e suas dependencias, armazenando-os na pasta node_modules
        node_modules: pasta criada ao instalar o primeiro pacote com npm, onde é armazenada todos os pacotes e dependencias necessarias para os pacotes
        package.json: registra as principais dependencias do projeto
        package-look: registra todas as dependencias e dependencias de dependencias do projeto / toda a arvore de dependencias

- O que é o Express? Um Framework para desenvolver backend de aplicações web no Node.js. Utilizado para criar um servidor web e API's.

- O que é uma API(Aplication Programming Interface)? Conjunto de rotas/endpoints para responder requisições, que servem como meio de comunicação entre dois sistemas, e que fornece informações para a interface do usuário

- O que é um Framework? Conjunto de recursos/ferramentas para solucionar um problema
    Diferente das bibliotecas, o framework já da uma base de COMO resolver o problema de forma mais especifica, dando um caminho, as bibliotecas já deixam as ferramentas um pouco mais soltas
    Alguns framewors podem ser mais opinativos que outros, o que não significa ser melhor, varia com o propósito do projeto

- Como mudar o formato de importação de require (common.js) que é o modo padrão, para module? package.json type
    a mudança principal do formato de importação é basicamente a sintaxe de como importar funções/classes, etc

- O que é HTTP (Hyper Text Transfer Protocol)? Protocolo de comunicação padrão da web, para transferencias de páginas html

- Quais os métodos de requisição HTTP e para que serve cada um deles? 
    GET: consultas, requisições, pegar/solicitar/obter dados; 
    POST: adicionar novos registros na base de dados, inserções de dados, cadastros, registros; 
    PUT: editar/atualizar dados que já estão na base de dados de forma completa; 
    PATCH: edições/atualizações parciais de dados, diferente do put que é uma atualização completa;
    DELETE: rota que apaga/exclui algo do banco.

- Para que serve a flag --watch do node ao rodar o servidor? Fica observando toda a arvore de arquivos que compõem o projeto, quando alguma alteração for salva, ele reinicia o servidor
    Não auxilia em erros, não melhora performance do servidor, apenas reinicia quando as alterações são salvas.

- Para que serve o Router no Express? Para organizar o projeto separando os arquivos em conjuntos de rotas com o mesmo endpoint, facilitando manutenção e escalabilidade

- O que é um Padrão de Projeto? 
    Convenção estabelecida por desenvolvedores para desenvolver um projeto mantendo um padrão de organização. 
    Torna prático se familiarizar com diferentes projetos de diferentes desenvolvedores/empresas
    - Padrão de projeto MVC (Model-View-Controller):
            Model: Gerencia os dados, regras de negócio e lógica da aplicação, manipula as informações e interage com o banco de dados
            View: Responsável por enviar as ações do usuário para o Controller e exibir a interface do usuário (front-end)
            Controller: Atua como intermediário entre a View e o Model, recebendo as solicitações via View, processa usando o Model e retorna as respostas. Responsável pela entrada, processamento e saída dos dados.
    - Padrão de projeto Middleware: 
        Padrao de projeto utilizado pelo express para separar o fluxo de execução (tudo que precisa executar) em blocos (middlewares), que são funções e são executados em sequencia. Assim que um middleware termina de fazer o que deve fazer, ele passa para o próximo. Os middlewares tem objetos em comum trafegando entre eles então podem conversar entre si.
            Middleware é uma função é executada em um fluxo de execução. Organiza o fluxo de execução em partes(middlewares/funções) cria um fluxo de execução (pipeline) de funções, cada middleware tem seu papel, ira efetuar sua responsabilidade e irá passar para o próximo na sequência. No caso do express, ele usa os objetos req e res como objeto comum para ir passando para os próximos middlewares. Além disso todo middleware que for intermediário (não for último), necessita da função "next" do express, para passar para o próximo middleware
         (Exemplo: logger)

- O que é um ORM (Object-Relational Mapping)? É uma forma de mapear o banco de dados para fazer as operações sem precisar escrever os comandos especificos da linguagem do banco

- Quais as vantagens de utilizar um ORM? Conseguir trocar de banco de dados com mais facilidade, com pouquíssimo esforço

- Técnica de programação "Never Nesting"(nunca aninhar): é uma filosofia de desenvolvimento de software e estilo de codificação que visa evitar estruturas profundamente aninhadas, como múltiplos níveis de if, for, while ou else um dentro do outro

- Como utilizar parametros de Url?

    ----------------------------------------

- Validação de Dados com Zod
    - Para que serve a biblioteca do Zod? Ajuda a fazer a validação dos dados antes de enviar ao banco e a registrar as regras de negócio na camada de modelo na arquitetura MVC e utilizado no controller.
    - Para que serve a função Partial? Para fazer a validação de rotas que não exigem todos os dados. Uma forma de tornar algo não obrigatório temporariamente para o teste; Uma forma de flexibilizar pontualmente uma propriedade obrigatória
    - Qual a diferença do parse para o safeParse? Parse lança uma exceção no sistema para tratá-lo com try catch quando ocorre um erro; SafeParse quando gera um erro de validação devolve isso dentro de um objeto/propriedade booleano

- Tratamento de Erros
    - Qual o papel do ErrorHandler? Quando é lançada uma exceção, da uma mensagem mais amigável para o usuário
    - Quais erros devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch? ErrorHandler é ideal para erros mais genéricos e try catch para erros mais específicos.
    - Quais os paramentros de entrada de um middleware de ErrorHandler? error, request, response e next, diferente de midlewares do tipo controller que só precisam de req e res pois não vão passar para um próximo middleware

- Query Params (exemplo: /user?name=tiago)
    - Como capturar um parametro query da url no Controller? Através do req.query
    - Para que são utilizados em geral os query params? Para filtros, buscas de resultados em gets

- Autenticação com JWT
    - Quais as diferenças dos métodos de Autenticação? E como funcionam?
        - Basic Acess ou Auth - Base64 (email:pass):
            Pega o user e pass do usuário e a cada request(requisição) vai enviar como base64 que é um conjunto simplificado de 64 caracteres para escrever as strings. base64 não é uma codificação, apenas um metodo de transcrever as strings de forma simplificada. Não é um método muito escalável devido ao alto número de requisições que afetam o desempenho. Ideal para comunicação interna entre apis em ambiente seguro
        - Bearer Token (Opaque)
            Código aleatório único que não guarda nenhuma string dentro dele (token), toda vez que for acessar a api ele reverifica o token, semelhante ao base64 porém mais seguro devido a aleatóridade dos caracteres do token.
        - Bearer Token JWT
            Armazena as informações do usuário em um token aleatório codificado para que o banco saiba de quem é o token e não fique fazendo requisições desnecessárias. Deve definir validade do token por questões de segurança pois se alguem tiver acesso ao token, pode ser um risco.
        - Bearer Token JWT + Refresh Token
            Refresh token é o mais utilizado e mais seguro, pois verifica se o usuário continua acessando, e permanece logado gerando novos tokens, e o usuário pode encerrar as sessões parando a geração dos tokens.
    - Quais as características do JWT?
        Não se devem colocar dados sensíveis no payload pois uma vez capturado o token, qualquer pessoa pode ter acesso a esses dados. A segurança está no segredo, que valida o token.