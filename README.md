# 🚀 SOS Abrigos

Sistema fullstack para cadastro e gerenciamento de abrigos, desenvolvido com Node.js, Express, SQLite e React.

---

## 📌 Sobre o projeto

O **SOS Abrigos** é uma aplicação web que permite:

* 📍 Cadastrar abrigos
* 📋 Listar abrigos disponíveis
* ❌ Remover abrigos
* 🌐 Acessar tudo online

Projeto desenvolvido com foco em prática de desenvolvimento fullstack e deploy em nuvem.

---

## 🛠️ Tecnologias utilizadas

### Backend

* Node.js
* Express
* SQLite
* CORS

### Frontend

* React
* Vite
* JavaScript
* CSS

### Deploy

* Render (backend e frontend)

---

## 🌐 Acesse o projeto

🔗 Frontend:
https://sos-abrigos-1.onrender.com

🔗 Backend (API):
https://sos-abrigos.onrender.com/api/abrigos

---

## 📦 Como rodar o projeto localmente

### 🔙 Backend

```bash
cd backend
npm install
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

---

## 🔗 Rotas da API

| Método | Rota             | Descrição      |
| ------ | ---------------- | -------------- |
| GET    | /api/abrigos     | Listar abrigos |
| POST   | /api/abrigos     | Criar abrigo   |
| DELETE | /api/abrigos/:id | Remover abrigo |

---

## ⚠️ Observações

* O banco SQLite pode ser resetado no plano gratuito do Render
* A API pode demorar alguns segundos para responder na primeira requisição (cold start)

---

## 👨‍💻 Autor

Desenvolvido por **Samy** 🚀

---

## ⭐ Considerações finais

Projeto criado para fins de estudo e prática em desenvolvimento web fullstack.

---
