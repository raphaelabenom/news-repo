# News Repo

Perguntas?
O que é versionamento semântico?
O que é delta encoding?

1. Usar ferramentas para entregar um projeto até o final
2. Que gere impacto em alguém
3. Que seja uma experiência prazerosa

---

npm init

npm install next@latest
npm install react@latest
npm install react-dom@latest

Next use file-Based Routing - Roteamento baseado em arquivos

- Onde o nome do arquivo vira o nome da rota
- Por exemplo: a produtos/produtos.js vira www.exemplo.com.br/produtos

Componentes e rotas

npm run dev

# Revisão GIT

Versionamento de código

Primeiros timeline:
Versionamento centralizado

- 1972: SCCS
- 1982: RCS
- 1986: CVS
- 2000: SVN
  Versionamento distribuído
- 2005: GIT

Palavras chaves:

- Desentralizado
- Controle de versionamento
- Diretório local - Offline e Online

### Estágios dos arquivos dentro do git:

Estágios 3 do git:

- Untracked: Não rastreado
- Modified: Modificado
  Um arquivo conhecido na qual foi tirado um snapshot no passado, quando ele sofre uma modificação.
- Staged: Área de preparo
  Está seleciona e pronto para o commit
- Commit: Compromisso
  Versionar o código

Depois acompanha o status do repositório

### Comandos

git merge - Unir versões de código
git diff - Representa um snapshot de uma foto antiga e uma foto nova (modificação)
git log --oneline - Registro / snapshots
git commit - Commit = compromisso
git status -
git add -
git log --stat
git commit --amend
git push - Empurrar / Upload
git pull - Puxar / Download

# Client and server

Cliente -> request <-> Server -> ...

Modelo orgânico e impressora 3D

"O lixo de uns, é o tesouro de outros"

# Organização de tarefas

Fazer muito com pouco!

STEP 1
Ser lembrado individualmente, sabe como e o que deve ser feito!

Menor custo de produção, energia, e tempo de aquecimento.

TAFERA

- SUBTAREFAS
- SUBTAREFAS
  TAFERA
- SUBTAREFAS
- SUBTAREFAS

STEP 2
Ser lembrado em grupo

- Coletive Board

STEP 3
Expandir o conhecimento
conversar e desenvolver o que e o que deve ser feito. Trello e GITHUB

STEP 3
Métricas
Exemplo


SEMANA 1
TOTAL | 50
EXECUTADAS | 30
CONCLUSÃO | 60%



PoC = Proof of Concept

MVP = Minimum Viable Product

Excesso de engenharia

Teste automatizados

MODEL - CAIXA DE FERRAMENTA: USADA PARA CONSTRUIR O SISTEMA, NO MOMENTO CERTO VOCÊ PODE IMPORTA E USAR


VIEW 
CONTROLER

commons js

TDD = TESTE DRIVEN DEVELOPMENT

DESENVOLVIMENTO ORIENTADO A TESTES / POR PELOS TESTES


Tudo é uma interface: Programável ou não programável

Interface web
interface de programação das aplicações


Pesquisar sobre função assíncrona e síncrona

ORM - Object-Relational Mapping
Sequelize


---- INSTALAÇÃO POSTGRES VIA TERMINAL

sudo apt install postgresql-client

psql --host=localhost --username=postgres --port=5432

docker compose up -d --force-recreate

docker compose up -f infra/compose.yaml up



