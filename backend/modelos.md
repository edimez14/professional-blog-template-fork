### Usuarios

- email -> texto
- contraseña -> credencial segura.
- avatar -> imagen
- nombre de usuario -> texto
- rol -> tipo de usuario (admin, moderador, usuario)
- estado -> activo / bloqueado

### Articulo

- titulo -> texto
- slug -> texto unico
- contenido -> markdown
- autor -> modelo usuario
- estado -> borrador / publicado
- fecha_creación -> tiempo

  fecha_publicación (opcional) -> tiempo

### Comentario

- contenido -> markdown
- comentario_padre (opcional) -> markdown
- autor -> modelo usuario
- articulo -> modelo articulo
- estado -> pendiente / aprobado
- fecha_creación -> tiempo

### **cada modelo vive en:**

- Usuario → `accounts`
- Artículo → `blog`
- Comentario → `comments`