# Especificações do Projeto

Nesta parte do projeto iremos demonstrar como seria o perfil dos nossos usuários e suas funcionalidades.  

Beneficiário: 

Os usuários serão responsáveis por se cadastrar pelo site web e fazer Login, durante o cadastro do login haverá um campo onde o usuário irá selecionar qual o papel ele deseja ter, como Instituição, doador ou beneficiário.  

Tendo acesso ao site como beneficiário o mesmo irá relatar, durante o preenchimento dos formulários para se cadastrar nas instituições, as suas motivações para ser um beneficiário. Acessar o site além de relatar suas necessidades, outro benefício que possuirão é a visualização das ONG’s que atendam a sua preferência, podendo acompanhar seu processo de entrega de doação e situação em que se encontra por meio do site ou email.  

Doador: 

Através do papel escolhido durante o cadastro, o usuário cadastrado como doador fara o Login e terá ferramentas que o auxiliará na escolha tanto de intuições quanto do beneficiário que melhor lhe atenda, podendo entrar em contato direto com os beneficiários. Acompanhar o processo da sua doação até o momento da entrega. 

Instituição: 

Com o cadastro concluído como instituição, os mesmos terão acesso a ferramentas especificas que somente aqueles cadastrados como instituições possuem. Dentre estas ferramentas se encontram a possibilidade de gerenciar os cadastros dos beneficiários e doadores que desejam se inscrever ou colaborar nas doações da instituição, alinhado a isso haverá ferramentas que possibilita administrar os pedidos já concluídos ou que estão em andamento.

## Personas

Persona 01 - João Guilherme tem 34 anos, é formado em ciências contábeis. Por uma necessidade no passado, onde dependia de doações procurou uma instituição que melhor lhe atendia, porem encontrou dificuldades e falta de informações sobre como se candidatar para receber essas doações. E agora com melhores condições ele visa encontrar um meio mais seguro para fazer suas doações. 

Persona 02 - Nathyelle Silva tem 21 anos, tem dois filhos e é mãe solteira. Tem ensino fundamental completo, mas abandonou a educação por uma necessidade de sustento a família por motivos financeiros. Por esses motivos ela depende de doações para alimentar sua família e desde então esteve em busca de doações.

Persona 03 - Juliana Fernandes tem 29 anos, tem 3 filhos e é mãe solteira. Seu marido era a principal fonte de renda familiar porém faleceu a dois anos. Com a necessidade de sustentar a familia, Juliana conseguiu um trabalho como recepcionista, porém, recebe um salario muito baixo, sendo insuficiente para o sustento de sua familia. Devido a esses fatores, ela tem procurado por instituições ou doadores de onde pode receber auxilio alimenticio para sua familia.

Persona 04 - Jorge Alvaro tem 55 anos, tem 3 filhos e é formado em engenharia eletrica.Veio de origem humilde e durante parte de sua vida passou por dificuldades financeiras, tendo passado fome algumas vezes. Iniciou como microempreendedor no ramo de energia fotovoltaica e a medida em que seu negocio foi crescendo e sua condição financeira foi melhorando, sentiu um desejo de estar ajudando outras pessoas que passam pelas dificuldades que passou. Ele conversou com alguns de seus amigos e familiares mas achou muito pouca informação sobre lugares que poderia estar doando. Por essa razão, Jorge decidiu abrir uma ONG visando ajudar pessoas com dificuldade de sustento, que perderam tudo em enchentes, incendios e entre outros. Porém, deseja divulgar sua instituição e busca um local onde possa estar compartilhando informações e entrando em contato com aqueles que estão necessitanto de algo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Nathyelle(Usuário Beneficiario)|Me cadastrar no sistema web como pessoa, família e/ou grupo em situação de vulnerabilidade.| Buscar e receber informativos sobre doações.|
|João Guilherme (Usuário Doador) |Me cadastrar no sistema web como doador, instituição e/ou organização doadora. | Destinar minhas doações para uma instituição confiável.|
|Juliana(Usuário Beneficiario)|Me cadastrar no sistema web como pessoa, família e/ou grupo em situação de vulnerabilidade. | Buscar por instituições que realizem doações.|
|Jorge(Usuário Instituição)|Me cadastrar no sistema web como doador, instituição e/ou organização doadora| Divulgar minha instituição e buscar pessoas em situação de vulnerabilidade.|
|Jorge(Usuário Instituição)|Utilizar a função de gerenciamento de doações do sistema | Para ter rastreabilidade das doações realizada pela minha instituição.| 
|Administrador       |Alterar permissões                   |Gerenciar o Sistema de Doações           |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----| 
| RF-001 |Criar e permitir que o usuário se cadastre no site | ALTA |Rafael| 
| RF-002 |Criar e permitir o Login do usuário| ALTA |Gustavo| 
| RF-003 |Criar e permitir o preenchimento do formulário de doação | ALTA |Gabriel| 
| RF-004 |Apresentar ao usuário os doadores compatíveis com sua necessidade | MÉDIA |Nicolas| 
| RF-005 |Permitir ao usuário gerar um relatório mensal referente as doações realizadas |BAIXA |Nicolas| 
| RF-006 |Criar e apresentar ao usuário uma serie de perguntas e respostas pertinentes a doação |MÉDIA |Ademar| 
| RF-007 |Permitir o acompanhamento do processo de doação |MÉDIA |Lucas Braga| 
| RF-008 |Gerenciamento de cadastro dos beneficiários e doadores |ALTA |José| 
| RF-009 |Apresentar os termos de contrato durante o cadastro |ALTA |Lucas Eduardo| 
| RF-010 |Notificar o doador/instituição sobre interesse de um beneficiário por uma doação |ALTA |José| 
| RF-011 |Retornar a resposta a requisição de doação ao beneficiário |ALTA |Gustavo|   

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s. | BAIXA |
|RNF-003| Deve apresentar uma verificação de duas etapas ao usuário logar. | ALTA |
|RNF-004| Deve apresentar uma opção para recuperação de senha. | BAIXA |
|RNF-005| Deve haver apenas um cadastro por CPF. |MÉDIA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não serão feitas transferências monetárias            |
|04| Não seremos responsáveis pela entrega das doações. Seremos somente um intermedio entre os usuários|
|05| Não será possível o compartilhamento de dados pessoais dos usuários, exceto para as instituições|


