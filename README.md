# 🧑‍🍳 Plataforma CookShare

Una plataforma web donde los usuarios pueden crear, editar y buscar recetas de cocina, comentar, subir imágenes y guardar recetas favoritas. Incluye autenticación segura y control de roles.

## 🧩 Tecnologías

### 🖥️ Frontend

* **Next.js** (React)
* **Shadcn UI** – Componentes modernos y accesibles
* **EditorJS** – Editor WYSIWYG para redactar recetas

### 🧪 Backend

* **NestJS** – Framework modular y escalable para Node.js

### 🗃️ Base de Datos

* **SQLite** – Ligera y embebida, ideal para desarrollo o proyectos pequeños

### 🧰 Extras

* **Prisma** – ORM para gestión de base de datos
* **Multer** – Manejo de uploads (imágenes de recetas)
* **Autenticación** – Sistema seguro con control de sesiones y roles

## ✨ Funcionalidades principales

* Registro e inicio de sesión de usuarios
* CRUD de recetas con editor visual
* Comentarios en recetas
* Subida de imágenes
* Guardar recetas como favoritas
* Búsqueda de recetas
* Panel administrativo (según rol)

## 🚀 Cómo iniciar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   ```

2. Instala dependencias:

   ```bash
   cd tu-repo
   npm install
   ```

3. Configura el entorno:
   Crea un archivo `.env` con las variables necesarias para frontend y backend.

4. Ejecuta el frontend:

   ```bash
   cd apps/frontend
   npm run dev
   ```

5. Ejecuta el backend:

   ```bash
   cd apps/backend
   npm run start:dev
   ```

---