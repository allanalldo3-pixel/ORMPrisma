# ORMPrisma

Projeto de estudos do Prisma ORM com Node.js e SQLite. O exemplo principal modela cursos e módulos e demonstra um relacionamento muitos-para-muitos por meio de uma tabela associativa.

## Tecnologias

- Node.js com módulos ES (`type: module`)
- Prisma ORM 6
- SQLite

## Requisitos

- Node.js e npm instalados

## Configuração

Clone o repositório, instale as dependências e aplique as migrations para criar o banco local e gerar o Prisma Client:

```bash
git clone https://github.com/allanalldo3-pixel/ORMPrisma.git
cd ORMPrisma
npm install
npx prisma migrate dev
```

O datasource está configurado em `prisma/schema.prisma` para usar SQLite. O banco `dev.db` é criado em `prisma/`.

## Executar os exemplos

Os arquivos em `src/` são exemplos independentes. Por exemplo, para criar um curso, um módulo e o vínculo entre eles, e depois consultar os vínculos com os registros relacionados:

```bash
node src/Modules/create.js
node src/Modules/findByRelation.js
```

Cada execução de criação pode inserir novos registros. Cursos e módulos têm nomes únicos, então altere os nomes nos exemplos antes de executar novamente se já existirem registros com esses nomes.

Para abrir o Prisma Studio e explorar os dados:

```bash
npx prisma studio
```

## Modelo de dados

- `Courses`: curso com nome único, descrição opcional, duração e data de criação.
- `Modules`: módulo com nome único, descrição obrigatória e data de criação.
- `CoursesModules`: tabela associativa com chaves estrangeiras para curso e módulo, permitindo relacionar cursos a módulos.

Os nomes das tabelas no banco são `courses`, `modules` e `courses_modules`. Os IDs são UUIDs gerados pelo Prisma, e as relações da tabela associativa usam `onDelete: Restrict` por padrão.

## Estrutura do projeto

```text
prisma/
  schema.prisma
  migrations/
src/
  Author/
  Courses/
  Modules/
```

Os diretórios em `src/` contêm scripts demonstrativos de criação, consulta e outras operações com o Prisma Client.