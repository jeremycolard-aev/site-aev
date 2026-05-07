(function () {
  var hb = document.querySelector('.hamburger');
  var nl = document.querySelector('.nav-links');

  function closeMenu() {
    nl.removeAttribute('style');
    nl.classList.remove('mobile-open');
    hb.setAttribute('aria-expanded', 'false');
  }

  hb.addEventListener('click', function () {
    var isOpen = nl.classList.contains('mobile-open');
    if (isOpen) {
      closeMenu();
    } else {
      nl.classList.add('mobile-open');
      Object.assign(nl.style, {
        display: 'flex', position: 'fixed',
        top: '68px', left: '0', right: '0',
        flexDirection: 'column', background: 'var(--papier)',
        padding: '1.5rem 2rem', borderBottom: '2px solid var(--rouge)',
        zIndex: '400', gap: '1.2rem'
      });
      hb.setAttribute('aria-expanded', 'true');
    }
  });

  nl.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth < 768) closeMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) { nl.removeAttribute('style'); nl.classList.remove('mobile-open'); }
  });

  window.addEventListener('scroll', function () {
    document.querySelector('nav').style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,.07)' : 'none';
  });
})();
