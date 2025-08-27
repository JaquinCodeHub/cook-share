---

# Backend API - Recetas Colaborativas (Rutas Optimizadas)

## 🔑 Autenticación y Usuarios

| Método | Ruta                 | Descripción                                               | Rol requerido       |
| ------ | -------------------- | --------------------------------------------------------- | ------------------- |
| POST   | `/api/auth/register` | Registrar un nuevo usuario. Valida datos y retorna JWT.   | Público             |
| POST   | `/api/auth/login`    | Login de usuario. Retorna JWT para autenticación.         | Público             |
| GET    | `/api/auth/profile`  | Obtener perfil del usuario autenticado.                   | Usuario autenticado |
| PUT    | `/api/users/{id}`    | Editar datos del usuario. Solo el propio usuario o Admin. | Propietario/Admin   |
| DELETE | `/api/users/{id}`    | Eliminar usuario. Solo Admin.                             | Admin               |
| GET    | `/api/users`         | Listar todos los usuarios.                                | Admin               |

---

## 📖 Recetas

| Método | Ruta                | Descripción                                                                                       | Rol requerido |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| POST   | `/api/recetas`      | Crear una receta con título, descripción, instrucciones, categoría, ingredientes e imágenes.      | Editor/Admin  |
| GET    | `/api/recetas`      | Listar todas las recetas. Permite filtrar por categoría, ingredientes, autor, búsqueda por texto. | Público       |
| GET    | `/api/recetas/{id}` | Obtener detalle completo de una receta: ingredientes, imágenes, comentarios.                      | Público       |
| PUT    | `/api/recetas/{id}` | Editar receta existente. Solo autor o Admin.                                                      | Autor/Admin   |
| DELETE | `/api/recetas/{id}` | Eliminar receta existente. Solo autor o Admin.                                                    | Autor/Admin   |

---

## 🥗 Ingredientes

| Método | Ruta                     | Descripción                                | Rol requerido |
| ------ | ------------------------ | ------------------------------------------ | ------------- |
| GET    | `/api/ingredientes`      | Listar todos los ingredientes disponibles. | Público       |
| POST   | `/api/ingredientes`      | Crear un nuevo ingrediente.                | Editor/Admin  |
| PUT    | `/api/ingredientes/{id}` | Editar un ingrediente existente.           | Admin         |
| DELETE | `/api/ingredientes/{id}` | Eliminar un ingrediente.                   | Admin         |

---

## 🗂 Categorías

| Método | Ruta                   | Descripción                              | Rol requerido |
| ------ | ---------------------- | ---------------------------------------- | ------------- |
| GET    | `/api/categorias`      | Listar todas las categorías disponibles. | Público       |
| POST   | `/api/categorias`      | Crear nueva categoría.                   | Admin         |
| PUT    | `/api/categorias/{id}` | Editar categoría existente.              | Admin         |
| DELETE | `/api/categorias/{id}` | Eliminar categoría.                      | Admin         |

---

## 💬 Comentarios

| Método | Ruta                            | Descripción                                | Rol requerido       |
| ------ | ------------------------------- | ------------------------------------------ | ------------------- |
| POST   | `/api/recetas/{id}/comentarios` | Agregar un comentario a la receta.         | Usuario autenticado |
| GET    | `/api/recetas/{id}/comentarios` | Listar todos los comentarios de la receta. | Público             |
| PUT    | `/api/comentarios/{id}`         | Editar un comentario propio.               | Autor/Admin         |
| DELETE | `/api/comentarios/{id}`         | Eliminar un comentario.                    | Autor/Admin         |

---

## ⭐ Favoritos

| Método | Ruta                           | Descripción                                       | Rol requerido       |
| ------ | ------------------------------ | ------------------------------------------------- | ------------------- |
| POST   | `/api/recetas/{id}/favoritos`  | Agregar receta a favoritos del usuario.           | Usuario autenticado |
| DELETE | `/api/recetas/{id}/favoritos`  | Quitar receta de favoritos del usuario.           | Usuario autenticado |
| GET    | `/api/usuarios/{id}/favoritos` | Listar todas las recetas favoritas de un usuario. | Usuario/Admin       |

---

## 🖼 Imágenes

| Método | Ruta                         | Descripción                                                 | Rol requerido |
| ------ | ---------------------------- | ----------------------------------------------------------- | ------------- |
| POST   | `/api/recetas/{id}/imagenes` | Subir imágenes a la receta (soporte de múltiples archivos). | Editor/Admin  |
| GET    | `/api/recetas/{id}/imagenes` | Listar imágenes de una receta.                              | Público       |
| DELETE | `/api/imagenes/{id}`         | Eliminar una imagen de la receta.                           | Autor/Admin   |

---

## ⚙️ Administración

| Método | Ruta                     | Descripción                                                                     | Rol requerido |
| ------ | ------------------------ | ------------------------------------------------------------------------------- | ------------- |
| GET    | `/api/admin/dashboard`   | Panel de métricas del sistema: número de usuarios, recetas, actividad reciente. | Admin         |
| GET    | `/api/admin/usuarios`    | Listar usuarios con opciones de edición y eliminación.                          | Admin         |
| GET    | `/api/admin/logs`        | Acceso a registros y auditoría de acciones del sistema.                         | Admin         |
| GET    | `/api/admin/recetas`     | Gestión de todas las recetas (editar, eliminar, aprobar publicaciones).         | Admin         |
| GET    | `/api/admin/comentarios` | Gestión de todos los comentarios (eliminar inapropiados).                       | Admin         |
| GET    | `/api/admin/imagenes`    | Gestión de todas las imágenes subidas a recetas.                                | Admin         |

---

✅ **Notas sobre diseño de rutas**:

* Se sigue **convención RESTful**, con endpoints claros y consistentes.
* Admin tiene rutas separadas (`/api/admin/...`) para gestión centralizada.
* Todas las rutas incluyen descripción y rol requerido, lo que facilita **documentación técnica y testing**.
* Pensado para integrarse con el frontend SPA que ya definimos.

---