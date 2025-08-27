---

# Frontend - Recetas Colaborativas (Rutas Optimizadas)

## 🔑 Autenticación y Perfil

| Ruta        | Descripción                                                                                      | Rol requerido       |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------- |
| `/register` | Formulario para registrar un nuevo usuario. Incluye validaciones y mensajes de error.            | Público             |
| `/login`    | Formulario de inicio de sesión con JWT. Redirige a `/dashboard` o `/recetas` tras login exitoso. | Público             |
| `/logout`   | Cierra la sesión del usuario y limpia el token JWT.                                              | Usuario autenticado |
| `/profile`  | Página para ver y editar perfil del usuario (nombre, email, contraseña).                         | Usuario autenticado |

---

## 📖 Recetas

| Ruta                   | Descripción                                                                                                                                               | Rol requerido       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `/recetas`             | Listado de todas las recetas disponibles. Permite filtrar por categoría, ingredientes, autor o búsqueda por texto.                                        | Público             |
| `/recetas/{id}`        | Detalle completo de la receta seleccionada: ingredientes, instrucciones, imágenes, comentarios, valoración y botones de interacción (favorito, comentar). | Público             |
| `/recetas/nueva`       | Formulario WYSIWYG para crear una nueva receta. Permite agregar ingredientes, categoría, imágenes y publicar o guardar como borrador.                     | Editor/Admin        |
| `/recetas/{id}/editar` | Formulario para editar una receta existente. Solo accesible para el autor o Admin.                                                                        | Autor/Admin         |
| `/mis-recetas`         | Listado de todas las recetas creadas por el usuario autenticado. Permite filtrar por estado (publicada, borrador).                                        | Usuario autenticado |

---

## 🥗 Ingredientes y Categorías

| Ruta                  | Descripción                                                                             | Rol requerido |
| --------------------- | --------------------------------------------------------------------------------------- | ------------- |
| `/ingredientes`       | Muestra listado completo de ingredientes para referencias o filtros.                    | Público       |
| `/categorias`         | Listado de todas las categorías de recetas.                                             | Público       |
| `/admin/ingredientes` | CRUD completo de ingredientes (crear, editar, eliminar). Permite búsqueda y paginación. | Admin         |
| `/admin/categorias`   | CRUD completo de categorías.                                                            | Admin         |

---

## 💬 Comentarios

| Ruta                              | Descripción                                        | Rol requerido       |
| --------------------------------- | -------------------------------------------------- | ------------------- |
| `/recetas/{id}/comentarios`       | Listado de todos los comentarios de una receta.    | Público             |
| `/recetas/{id}/comentarios/nuevo` | Formulario para agregar un comentario a la receta. | Usuario autenticado |
| `/comentarios/{id}/editar`        | Permite editar un comentario propio.               | Autor/Admin         |
| `/comentarios/{id}/eliminar`      | Permite eliminar un comentario.                    | Autor/Admin         |

---

## ⭐ Favoritos

| Ruta                      | Descripción                                                                        | Rol requerido       |
| ------------------------- | ---------------------------------------------------------------------------------- | ------------------- |
| `/favoritos`              | Listado de recetas guardadas por el usuario. Permite remover recetas de favoritos. | Usuario autenticado |
| `/recetas/{id}/favoritos` | Botón o acción rápida para agregar o remover la receta de favoritos.               | Usuario autenticado |

---

## 🖼 Imágenes

| Ruta                           | Descripción                                                                                    | Rol requerido |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------- |
| `/recetas/{id}/imagenes`       | Galería de imágenes de la receta.                                                              | Público       |
| `/recetas/{id}/imagenes/subir` | Formulario para subir imágenes asociadas a la receta. Permite descripción y control de tamaño. | Editor/Admin  |
| `/imagenes/{id}/eliminar`      | Acción para eliminar imagen de la receta.                                                      | Autor/Admin   |

---

## ⚙️ Panel de Administración

| Ruta                 | Descripción                                                                              | Rol requerido |
| -------------------- | ---------------------------------------------------------------------------------------- | ------------- |
| `/admin/dashboard`   | Panel de métricas y estadísticas globales (usuarios, recetas, actividad reciente).       | Admin         |
| `/admin/usuarios`    | Gestión completa de usuarios: listar, editar, eliminar, cambiar rol.                     | Admin         |
| `/admin/logs`        | Acceso a registros del sistema y auditoría de acciones.                                  | Admin         |
| `/admin/recetas`     | Gestión de todas las recetas de la plataforma (editar, eliminar, aprobar publicaciones). | Admin         |
| `/admin/comentarios` | Gestión de todos los comentarios (eliminar inapropiados).                                | Admin         |
| `/admin/imagenes`    | Gestión de imágenes subidas a recetas.                                                   | Admin         |

---

## 🔄 Rutas Complementarias / Funcionales

| Ruta              | Descripción                                                                                  | Rol requerido       |
| ----------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| `/buscar`         | Página de búsqueda global. Permite buscar por título, ingredientes, categoría o autor.       | Público             |
| `/notificaciones` | Listado de notificaciones del usuario (nuevos comentarios, interacciones con recetas, etc.). | Usuario autenticado |
| `/ayuda`          | Página de ayuda o FAQ para usuarios.                                                         | Público             |
| `/sobre`          | Información de la plataforma, términos y políticas.                                          | Público             |

---

✅ **Notas sobre diseño de rutas**:

* Se siguen **convenciones RESTful y de SPA**: `/recetas/nueva` y `/recetas/{id}/editar` son consistentes y claras.
* Admin y usuarios tienen rutas diferenciadas (`/admin/...`) para separar permisos y vistas.
* Todas las rutas tienen **descripción de funcionalidad**, lo que facilita documentación, desarrollo y testing.

---