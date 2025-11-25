/* components.js
   - Inyecta header y footer reutilizables en las páginas.
   - Provee función para construir nav responsive.
*/
(function(){
  const headerHtml = `
  <header>
    <div class="container" style="display:flex;align-items:center;justify-content:space-between">
      <a href="index.html" class="brand" aria-label="Enmanuel Hernández - inicio">
        <div class="logo" aria-hidden="true"></div>
        <div style="font-weight:700">Enmanuel Hernández</div>
      </a>
      <nav class="nav" aria-label="principal">
        <a href="index.html">Inicio</a>
        <a href="pages/musica/index.html">Música</a>
        <a href="pages/tecnologia/index.html">Tecnología</a>
        <a href="pages/trading/index.html">Trading</a>
        <a href="#contacto" class="cta font-semibold" style="margin-left:0.5rem; color:#000">Contacto</a>
      </nav>
    </div>
  </header>`;

  const footerHtml = `
  <footer>
    <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
        <div class="small">&copy; 2025 Enmanuel Hernández</div>
        <div class="small">Contacto: <a href="mailto:info@example.com" style="color:var(--gold)">info@example.com</a></div>
      </div>
    </div>
  </footer>`;

  function inject(){
    const bodies = document.getElementsByTagName('body');
    if(!bodies.length) return;
    const body = bodies[0];
    // insert header at top of body if not present
    if(!document.querySelector('header')){
      body.insertAdjacentHTML('afterbegin', headerHtml);
    }
    // insert footer if not present
    if(!document.querySelector('footer')){
      body.insertAdjacentHTML('beforeend', footerHtml);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else inject();

  window.GBComponents = { inject };
})();
