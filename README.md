# Azul Code Lab Landing

Landing page corporativa para **Azul Code Lab**, construida con React + Vite + TypeScript.

## Requisitos

- Node.js 18+
- npm 9+

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura recomendada

```text
.
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ tsconfig.json
└─ vite.config.ts
```

## Deploy rápido

### Vercel
1. Importar repositorio en Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### GitHub Pages
1. Ejecutar `npm run build`.
2. Publicar contenido de `dist/` en la rama de Pages (`gh-pages`) o usar una acción de deploy.
3. Si se publica en subpath, definir `base` en `vite.config.ts`.


### Netlify
1. Importar el repositorio en Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Asegurarse de **no** publicar la raíz del repo ni `src/` directamente.

> Este repositorio incluye `netlify.toml` con esos valores y redirect SPA para evitar pantalla en blanco al refrescar rutas.
