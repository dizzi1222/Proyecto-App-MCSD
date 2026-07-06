# 🚗 MCSD · Manual de Conducción y Seguridad Dominicana

Aplicación educativa sobre conducción y seguridad vial en República Dominicana. Proyecto final de grado en **Sistemas Informáticos**.

> **Live Demo:** [proyecto-app-mcsd.vercel.app](https://proyecto-app-mcsd.vercel.app/)

<p align="left">
  <img src="https://github.com/dizzi1222.png" width="36" height="36" style="border-radius: 50%;" alt="dizzi1222" />
  <strong> @dizzi1222</strong>
</p>

---

## Stack

- HTML5, CSS3, JavaScript
- Vite 5, Tailwind CSS v4, PostCSS
- Glassmorphism, scroll animations, splash screen

## Deploy

### Web (GitHub Pages)
El proyecto se despliega en **GitHub Pages** desde la rama `main`. Cualquier push a `main` activa el deploy automático:

```bash
git push origin main
# → GitHub Actions despliega en:
# https://dizzi1222.github.io/Proyecto-App-MCSD/
```

### Móvil (APK — Volt Build)
Deploy alternativo como aplicación Android nativa via **Volt Build**:

```
https://apps.volt.build/1d496dbf-1137-4fec-92d0-29c05aac9a3e/android.debug.apk
```

> La app fue originalmente diseñada para llevarse a APK. Este enlace contiene el build Android debug.

### Desarrollo local

```bash
npm install
npm run dev       # → localhost:3000
npm run build     # → dist/
```

## Historia

> *"Mi proyecto final para graduarme. En grupo, pero lo hice casi solo. Mis compañeros ayudaron con los mockups en Canvas — un concepto que ni estaba bien definido, pero el profesor supo indicarlo. Sin experiencia, fue una experiencia horrible. Pero aprobé."*

Original de 2019, modernizado a Vite + Tailwind CSS v4 con 8 páginas, splash screen, glassmorphism y diseño responsive. Una redención.
