# Sitio oficial — Enmanuel Hernández

Proyecto estático con la landing principal y subpáginas para Música (clases de guitarra), Tecnología y Trading.

Estructura principal
- `index.html` — Página principal (hub)
- `pages/musica/index.html` — Sección Música (clases de guitarra)
- `pages/tecnologia/index.html` — Sección Tecnología
- `pages/trading/index.html` — Sección Trading
- `assets/css/styles.css` — Estilos principales
- `assets/js/components.js` — Header/footer inyectados y navegación
- `assets/js/main.js` — Comportamiento (smooth scroll, formulario)
- `assets/img/` — Imágenes (perfil, recursos)

Probar localmente
1. Abre una terminal en la raíz del proyecto:
```bash
cd "/home/usuario/Paginas Web/Sitio Oficial 1.0"
```
2. Inicia un servidor estático (ejemplo con Python):
```bash
python3 -m http.server 8000
# abrir http://localhost:8000/
```

Despliegue en GitHub Pages
1. Sube tu repo a GitHub y confirma que `index.html` está en la raíz del repositorio.
2. En GitHub: `Settings` → `Pages` → selecciona `Branch: main` y `Folder: / (root)` y guarda.
3. La URL pública aparecerá en esa sección (ej. `https://maguet95.github.io/Enmanuel-Hernandez-sitio-oficial/`).

Notas sobre rutas y navegación
- El sitio incluye detección de `BASE` en `assets/js/components.js` para que los enlaces funcionen correctamente en GitHub Pages.
- Mantén `index.html` en la raíz y `assets/` y `pages/` en su lugar para evitar 404.

Recomendaciones
- Coloca la foto de perfil en `assets/img/profile.jpg`.
- Edita `assets/css/styles.css` para cambios visuales y `assets/js/main.js` para comportamiento.

Cómo contribuir / actualizar
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Soporte
- Si quieres que haga cambios de diseño, textos o configurar un dominio personalizado, dime y lo hago.

---
Archivo actualizado por el asistente para facilitar pruebas y despliegue.
