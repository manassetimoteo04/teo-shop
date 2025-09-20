# 🛒 Ecommerce Next.js + MongoDB

Um aplicativo de **e-commerce** moderno desenvolvido com **Next.js**, **TypeScript**, **TailwindCSS** e **MongoDB/Mongoose**.  
O objetivo é fornecer uma aplicação fullstack robusta, com autenticação, carrinho de compras e integração de pagamentos.

---

## ✨ Funcionalidades

- 📦 Catálogo de produtos
- 🔍 Busca e filtros
- 🛒 Carrinho de compras
- 👤 Autenticação de usuários (JWT ou NextAuth.js)
- 💳 Integração com sistema de pagamento (Stripe)
- 📱 Layout responsivo
- ⚡️ SSR e SSG com Next.js
- 🔐 Painel administrativo (CRUD de produtos, usuários e pedidos)

---

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática
- [TailwindCSS](https://tailwindcss.com/) – Estilização
- [MongoDB](https://www.mongodb.com/) – Banco de dados
- [Mongoose](https://mongoosejs.com/) – ODM para MongoDB
- [NextAuth.js](https://next-auth.js.org/) – Autenticação
- [Stripe](https://stripe.com/) – Integração de pagamentos
- [Zustand](https://zustand-demo.pmnd.rs/) – Estado global simples

---

## 📂 Estrutura do Projeto

```bash
ecommerce-next/
├── app/                  # App Router (Next.js 13+)
│   ├── (auth)/           # Login, registro
│   ├── (shop)/           # Catálogo e páginas
│   ├── api/              # Rotas de API (produtos, auth, pedidos)
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── components/           # Componentes reutilizáveis
├── lib/                  # Conexão com DB e utilitários
│   └── db.ts             # Configuração do mongoose
├── models/               # Schemas do Mongoose (User, Product, Order)
├── store/                # Gerenciamento de estado (Zustand)
├── types/                # Tipos do TypeScript
├── public/               # Imagens e assets
├── tailwind.config.ts
├── tsconfig.json
└── README.md
