// Detección de dispositivo
export function detectDevice() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent);

  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  // Agregar clase al HTML
  document.documentElement.classList.add(`is-${deviceType}`);

  // Guardar en sessionStorage
  sessionStorage.setItem('deviceType', deviceType);

  return deviceType;
}

// Ajustar viewport dinámicamente
export function adjustViewport() {
  const deviceType = sessionStorage.getItem('deviceType') || detectDevice();

  if (deviceType === 'mobile') {
    // Ajustes específicos para móvil
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    });
  }
}

// Inicializar
export function initDeviceDetection() {
  const deviceType = detectDevice();
  adjustViewport();

  console.log(`Dispositivo detectado: ${deviceType}`);

  return deviceType;
}
