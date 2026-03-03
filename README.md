# Scriptly

Scriptly is an edge-ready full-stack publishing platform that allows users to authenticate, write blogs, and read posts from other users.  
It is built to replicate the core blogging experience while focusing on clean architecture, shared validation, and scalable backend design.

---

## 🚀 Live Overview

Scriptly demonstrates:

- Edge-compatible backend using Hono
- PostgreSQL relational modeling with Prisma ORM
- JWT-based authentication
- Shared schema validation across frontend and backend
- Modular route architecture
- Protected CRUD operations

---

## 🧩 Features

### ✅ Implemented

- 🔐 User Authentication (Sign up / Login with JWT)
- 📝 Create & Publish Blogs
- 📖 View Blogs by All Users
- 👤 User-Specific Blog Management
- 🧱 Middleware-based Route Protection
- 📦 Shared Zod Validation Package (published to npm)

---

### 🔮 Planned Features

- ✏️ Edit & Delete Blogs
- 👍 Like & Comment System
- 🔍 Search & Filter Blogs
- 🖼️ Rich Text Editor with Image Upload
- 🌐 Production Deployment (Vercel / Render / AWS)

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS

### Backend
- Hono (Cloudflare Edge Runtime)
- JWT Authentication
- CORS Middleware

### Database
- PostgreSQL
- Prisma ORM

### Validation
- Zod (custom reusable validation package published to npm)

---

## 🏗 Architecture Overview

- Modular route separation (`/api/v1/user`, `/api/v1/blog`)
- Middleware-based JWT verification
- Prisma relational schema (User ↔ Post)
- Custom React hooks for authenticated data fetching
- Shared validation layer to prevent schema drift between frontend and backend

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/UtkarshPratapSingh7777/Scriptly.git
cd Scriptly
