<h1 align="center">💊 Farmácia E-commerce API</h1>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
  <!-- <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge"/> -->
</p>

---

## 📌 Sobre o Projeto

API REST desenvolvida como projeto final do Bootcamp, simulando o back-end de um **e-commerce de farmácia**. A aplicação permite gerenciar **produtos** e **categorias** com operações completas de CRUD e relacionamento entre as entidades.

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| Node.js | 18+ |
| NestJS | 10+ |
| TypeScript | 5+ |
| TypeORM | 0.3+ |
| MySQL / PostgreSQL | — |

---

## 📐 Modelo de Dados

### Categoria
| Campo | Tipo | Descrição |
|---|---|---|
| `id` | number | Identificador único |
| `nome` | string | Nome da categoria |
| `descricao` | string | Descrição da categoria |
| `produtos` | Produto[] | Produtos relacionados |

### Produto
| Campo | Tipo | Descrição |
|---|---|---|
| `id` | number | Identificador único |
| `nome` | string | Nome do produto |
| `descricao` | string | Descrição do produto |
| `preco` | decimal | Preço unitário |
| `estoque` | number | Quantidade em estoque |
| `foto` | string | URL da imagem |
| `categoria` | Categoria | Categoria do produto |

> Relação: uma **Categoria** possui muitos **Produtos** (`OneToMany / ManyToOne`)

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [MySQL](https://www.mysql.com/) ou [PostgreSQL](https://www.postgresql.org/) rodando localmente
- [Git](https://git-scm.com/)

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/projeto_final_bloco_02.git
cd projeto_final_bloco_02
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=farmacia
```

### 4. Executar a aplicação
```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod
```

A API estará disponível em: `http://localhost:4000`

---

## 🧪 Endpoints

### 📁 Categorias — `/categorias`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/categorias` | Lista todas as categorias |
| `GET` | `/categorias/:id` | Busca categoria por ID |
| `GET` | `/categorias/nome/:nome` | Busca categoria por nome |
| `POST` | `/categorias` | Cria nova categoria |
| `PUT` | `/categorias` | Atualiza uma categoria |
| `DELETE` | `/categorias/:id` | Remove uma categoria |

### 💊 Produtos — `/produtos`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca produto por ID |
| `GET` | `/produtos/nome/:nome` | Busca produto por nome |
| `POST` | `/produtos` | Cria novo produto |
| `PUT` | `/produtos` | Atualiza um produto |
| `DELETE` | `/produtos/:id` | Remove um produto |

---

## 🔗 Testando com Insomnia

1. Baixe e instale o [Insomnia](https://insomnia.rest/)
2. Crie uma nova coleção e configure a URL base como `http://localhost:4000`
3. Utilize os endpoints acima para testar cada operação

---





