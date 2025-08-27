---

# 🏗️ Arquitectura del Sistema - Aplicación Recetas Colaborativas

## 1. Diagrama conceptual

```text
Frontend (SPA Vue/Nuxt)
    ├─ Componentes: Login, Recetas, Perfil, Favoritos, Comentarios, AdminPanel
    └─ Se comunica con Backend vía API REST

Backend (API REST Node.js / Spring Boot)
    ├─ AuthController
    ├─ RecetaController
    ├─ ComentarioController
    ├─ UsuarioController
    └─ AdminController
    └─ Servicios: RecetaService, UsuarioService, ComentarioService, FavoritoService, ImagenService
    └─ Se comunica con DB y Storage

Base de Datos (PostgreSQL / MySQL / SQLite)
    └─ Almacena usuarios, recetas, ingredientes, categorías, comentarios, favoritos e imágenes

Almacenamiento de Archivos (S3 / Local Storage)
    └─ Para imágenes de recetas

Autenticación (JWT / OAuth2)
    └─ Gestiona login, tokens y roles

Administrador / Panel de Control
    └─ Dashboard Admin que se comunica con Backend y DB
```

---

## 2. Explicación de la arquitectura

### 🔹 Frontend

* SPA desarrollada en **Vue/Nuxt**.
* Componentes principales:

  * Login / Registro
  * Recetas (listado, detalle, creación, edición)
  * Perfil de usuario
  * Favoritos
  * Comentarios
  * Panel de administración (solo Admin)
* Se comunica con el backend mediante **API REST**.

### 🔹 Backend

* API REST implementada en **Node.js o Spring Boot**.
* Controladores:

  * **AuthController**: login, registro, ver perfil.
  * **RecetaController**: CRUD de recetas.
  * **ComentarioController**: CRUD de comentarios.
  * **UsuarioController**: CRUD de usuarios.
  * **AdminController**: gestión global (roles, dashboard, logs).
* Servicios: Recetas, usuarios, comentarios, favoritos, imágenes.

### 🔹 Base de datos

* Relacional (PostgreSQL, MySQL o SQLite).
* Almacena usuarios, recetas, ingredientes, categorías, comentarios, favoritos e imágenes.
* Diseño normalizado según ERD.

### 🔹 Almacenamiento de archivos

* Para imágenes de recetas.
* Puede ser **S3** en producción o almacenamiento local en desarrollo.
* Backend gestiona subida, lectura y eliminación.

### 🔹 Autenticación

* **JWT** para login y acceso seguro a endpoints.
* Frontend gestiona tokens y verifica permisos antes de acceder a rutas protegidas.

### 🔹 Panel de administración

* Interfaz para **Admin**.
* Permite gestionar usuarios, roles, recetas, comentarios, ingredientes y categorías.
* Conectado al backend y base de datos.

---

## 3. Flujo de interacción general

1. Usuario accede al **frontend**.
2. Se registra o hace login mediante **JWT**.
3. Frontend realiza **llamadas a la API REST** para:

   * Crear, editar, eliminar recetas.
   * Comentar recetas.
   * Guardar favoritos.
   * Subir imágenes.
4. Backend realiza **consultas a la base de datos** y gestiona almacenamiento de archivos.
5. Admin accede a **panel de control** para supervisar todo el sistema.

---

## 4. Características profesionales de esta arquitectura

* Separación clara de responsabilidades: **Frontend / Backend / DB / Storage / Auth**.
* Escalable: permite agregar microservicios, caching o colas de mensajes.
* Seguridad centralizada con JWT y roles.
* Modularidad: controladores y servicios bien organizados para mantener código limpio.
* Documentación lista para desarrolladores y DevOps.

---
