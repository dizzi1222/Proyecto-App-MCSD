// Animaciones avanzadas con Intersection Observer
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observar todos los elementos con animaciones
  const animatedElements = document.querySelectorAll('[class*="animate-"]');
  animatedElements.forEach(el => observer.observe(el));
}

// Smooth scroll para navegación
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Parallax effect (opcional)
export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Loading states
export function showLoading(element) {
  element.classList.add('loading');
  element.setAttribute('aria-busy', 'true');
}

export function hideLoading(element) {
  element.classList.remove('loading');
  element.setAttribute('aria-busy', 'false');
}

// Inicializar todas las animaciones
export function initAnimations() {
  initScrollAnimations();
  initSmoothScroll();
  // initParallax(); // Descomentar si se desea parallax
}
