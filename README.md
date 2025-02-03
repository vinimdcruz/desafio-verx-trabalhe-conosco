# 🧠 Brain Agriculture

Este é um projeto desenvolvido como parte de um desafio técnico. Ele fornece uma API para gerenciamento de agricultores, utilizando tecnologias modernas para escalabilidade, confiabilidade e facilidade de manutenção.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – Framework para construção de APIs escaláveis em Node.js
- **[Docker](https://www.docker.com/)** – Containerização para um ambiente de desenvolvimento consistente
- **[PostgreSQL](https://www.postgresql.org/)** – Banco de dados relacional robusto e escalável
- **[TypeORM](https://typeorm.io/)** – ORM para modelagem e comunicação com o banco de dados
- **[Jest](https://jestjs.io/)** – Testes automatizados para garantir confiabilidade do código
- **[Swagger](https://swagger.io/)** – Documentação interativa da API

## 📌 Arquitetura

A estrutura do projeto segue boas práticas de design de software, com separação de responsabilidades e modularização para facilitar a escalabilidade.

### Diagrama de Arquitetura

![Diagrama de arquitetura](docs/brain-agriculture-architecture.png)

## 🛠️ Configuração do Ambiente

A aplicação utiliza **Docker** para facilitar a configuração do ambiente e garantir consistência no desenvolvimento.

### Requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Executando a Aplicação

Na raiz do projeto, execute:

```bash
docker compose up --build
```

Isso criará e iniciará os containers do banco de dados (PostgreSQL) e da aplicação (NestJS).

📖 Acessando a Documentação da API
Após subir os containers, a API estará disponível em:

📌 Swagger UI: http://localhost:3000/api

🧪 Testes

O processo de autenticação e testes ainda será desenvolvido.


