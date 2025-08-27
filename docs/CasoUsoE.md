---

# 🔹 Explicación completa del diagrama de casos de uso

## Actores principales

### Usuario (lector estándar)
---
**Funcionalidades:**

* Registrarse y loguearse.
* Editar su perfil.
* Buscar recetas por texto, ingredientes o categoría.
* Ver detalles de recetas.
* Comentar recetas.
* Guardar recetas como favoritas y consultarlas.
* Ver notificaciones de interacción con sus recetas o comentarios.
---
### Editor
---

**Permisos:**

* Tiene todos los permisos del Usuario.

**Funcionalidades adicionales:**

* Crear recetas usando editor WYSIWYG.
* Agregar ingredientes, categorías e imágenes al crear receta.
* Editar y eliminar sus propias recetas.
* Subir imágenes para sus recetas.
---
### Admin (administrador)
---
**Control total sobre la plataforma.**

**Funcionalidades:**

* Gestionar usuarios y asignar roles.
* Gestionar todas las recetas y comentarios (editar/eliminar).
* Gestionar ingredientes y categorías.
* Gestionar imágenes de recetas.
* Acceder al dashboard de métricas y a logs del sistema.

---

## Relaciones importantes

* **Crear receta → Agregar ingredientes, categoría e imágenes**
  Una receta completa requiere estos elementos, mostrando dependencias.

* **Ver detalle de receta → Ver comentarios y ver imágenes**
  Al ver una receta, el usuario puede interactuar con comentarios y visualizar todas las imágenes asociadas.

* **Guardar receta favorita → Ver favoritos**
  La acción de guardar conecta con la lista de favoritos del usuario.

---

## Objetivo del diagrama

* Representar de manera visual **todos los roles y funcionalidades del sistema**.
* Facilita a desarrolladores entender **permisos, flujos de interacción y dependencias entre acciones**.
* Útil para **planificación de pruebas, desarrollo de frontend/backend y documentación técnica completa**.

---