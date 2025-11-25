/* main.js - comportamiento global
   - menú simple (si se extiende)
   - smooth scroll
   - formulario que abre WhatsApp con mensaje prellenado
*/
document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    })
  });

  // contact form handler - open WhatsApp
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.name && form.name.value) ? form.name.value.trim() : 'Contacto';
      const email = (form.email && form.email.value) ? form.email.value.trim() : '';
      const message = (form.message && form.message.value) ? form.message.value.trim() : '';
      const phone = '50762790856';
      const text = `Hola Enmanuel, soy ${name} (${email}). ${message}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }
});
