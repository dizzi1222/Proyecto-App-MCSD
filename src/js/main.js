// Main JavaScript - Entry point
import { initDeviceDetection } from './device-detection.js';
import { initAnimations } from './animations.js';
import { initMenu, initStickyNav } from './menu.js';

// Splash screen
function initSplashScreen() {
  const splash = document.querySelector('.splash');

  if (splash) {
    setTimeout(() => {
      splash.classList.add('splash-exit');

      setTimeout(() => {
        splash.remove();
      }, 500);
    }, 2000);
  }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Detección de dispositivo
  initDeviceDetection();

  // Splash screen
  initSplashScreen();

  // Menú
  initMenu();
  initStickyNav();

  // Animaciones
  initAnimations();

  console.log('MCSD App v2.0 inicializada ✨');
});

// Lazy loading de imágenes
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback para navegadores antiguos
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}
