# Sitio - Enmanuel Hernández (Propuesta)

Estructura mínima del sitio generada para "Enmanuel Hernández".

Instrucciones rápidas para probar localmente:

1. Abre una terminal en la carpeta `/site`.
2. Inicia un servidor estático (ejemplo con Python):

```bash
cd "${PWD%/}/site"
python3 -m http.server 8000
# abrir http://localhost:8000
```

Archivos principales:
- `index.html` — Landing Hub
- `pages/musica/index.html` — Sub-sitio Música
- `pages/tecnologia/index.html` — Sub-sitio Tecnología
- `pages/trading/index.html` — Sub-sitio Trading
- `assets/css/styles.css` — CSS modular (variables, layout, componentes)
- `assets/js/components.js` — Inyección de header/footer y nav
- `assets/js/main.js` — Lógica (menu, smooth scroll, formularios)
 - `assets/img/` — carpeta para subir tus imágenes (perfil, bio, proyectos)

Puedes subir la carpeta `site` completa a cualquier hosting estático.

---
Generado por el asistente: versión inicial. Revisa copy e imágenes; yo puedo ajustar todo según tus preferencias.

Nota: sube tu foto de perfil a `assets/img/profile.jpg` y las imágenes de proyecto a `assets/img/` para que se muestren en la página.
