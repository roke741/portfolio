# Portafolio Web en Astro

Migración desde Angular 15 a Astro con renderizado estático, componentes reutilizables y contenido centralizado.

## Scripts

- `npm run dev`: entorno local en `http://localhost:4321`
- `npm run build`: genera sitio estático en `dist/`
- `npm run preview`: vista previa del build

## Estructura

- `src/layouts/MainLayout.astro`: layout principal con metadatos SEO centralizados
- `src/data/content.ts`: textos, navegación, skills, proyectos, contacto y footer
- `src/components/sections`: secciones de la landing
- `src/components/ui`: componentes reutilizables de apoyo
- `src/pages/index.astro`: composición de la página única

## Principios aplicados

- Sin Angular, RxJS ni Zone.js
- Sin routing adicional ni SSR
- JavaScript mínimo (solo toggle de tema)
- Contenido tipado y desacoplado de la vista
- Optimizado para generación estática
