// Menú moderno con animaciones
export function initMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const menuOverlay = createMenuOverlay();

  if (!menuBtn || !menu) return;

  // Toggle menú
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('menu-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer click en overlay
  menuOverlay.addEventListener('click', closeMenu);

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Cerrar al hacer click en un link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function openMenu() {
    menu.classList.add('menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function createMenuOverlay() {
    let overlay = document.getElementById('menu-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'menu-overlay';
      overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300';
      document.body.appendChild(overlay);
    }

    return overlay;
  }
}

// Navbar sticky con efecto blur
export function initStickyNav() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Auto-hide en scroll down (opcional)
    // if (currentScroll > lastScroll && currentScroll > 200) {
    //   header.classList.add('nav-hidden');
    // } else {
    //   header.classList.remove('nav-hidden');
    // }

    lastScroll = currentScroll;
  });
}
