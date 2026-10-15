# febacode.com

Sitio de FebaCode (software e IA a la medida para negocios en México). Vite + React 19 + React Router 7, con prerender propio de todas las rutas.

## Comandos
- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera `dist/` (cliente, servidor y prerender de cada ruta, `404.html` y `sitemap.xml`). Falla si llega al sitio contenido no aprobado.
- `npm run lint`: ESLint.

## Dónde está cada cosa
- `src/config/site.js`: contacto, redes y enlaces de WhatsApp. Única fuente del teléfono y el correo.
- `src/config/pricing.js`: precios publicados (solo las entradas "desde"). `src/config/catalogo.js`: catálogo completo, que el sitio NO importa.
- `src/config/claims.js`: afirmaciones publicadas. `src/config/pendientes.js`: lo que aún no está confirmado (tampoco lo importa el sitio).
- `src/config/faq.js`, `services.js`, `nav.js`: contenido y navegación.
- `src/styles/tokens.css`: tokens de color (modo claro y oscuro), tipografía y espaciado.
- `src/routes.jsx`: rutas, títulos, descripciones y JSON-LD. `scripts/prerender.mjs`: prerender y guardas de contenido.
- `docs/rediseno/`: investigación, plan, precios, reporte final y prototipos.

## Reglas del contenido
Solo se publica lo que el dueño confirmó. Para publicar una afirmación o un nivel de precio, se confirma con el dueño y se mueve del archivo de pendientes/catálogo al archivo publicado. El build revisa el HTML y el JavaScript público.
