/* ═══════════════════════════════════════════════
   FortinFer S.C.S. – Script principale
   File: script.js  Ultima release 01/07/2026
   ═══════════════════════════════════════════════ */

/**
 * Raccoglie i dati del form e apre il client email
 * con oggetto e corpo precompilati.
 */
function inviaMessaggio() {
  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const tel      = document.getElementById('tel').value.trim();
  const servizio = document.getElementById('servizio').value;
  const msg      = document.getElementById('messaggio').value.trim();

  if (!nome || !email || !msg) {
    alert('Compila almeno Nome, Email e Messaggio prima di inviare.');
    return;
  }

  const subject = 'Richiesta da sito – ' + (servizio || 'Informazioni generali');
  const body =
    'Nome: ' + nome + '\n' +
    'Email: ' + email + '\n' +
    (tel      ? 'Telefono: '      + tel      + '\n' : '') +
    (servizio ? 'Tipo richiesta: ' + servizio + '\n' : '') +
    '\nMessaggio:\n' + msg;

  window.location.href =
    'mailto:fortinfer@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body='    + encodeURIComponent(body);
}

/**
 * Back to top – mostra il pulsante dopo 300px di scroll.
 */
/**
 * Scroll reveal – anima le card quando entrano nel viewport.
 */
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.servizio-card, .stat-card, .contact-item, .lav-col')
    .forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(16px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      observer.observe(el);
    });
});

/**
 * Back to top – mostra il pulsante dopo 300px di scroll.
 */
window.addEventListener('scroll', function () {
  var btn = document.getElementById('backToTop');
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
});
