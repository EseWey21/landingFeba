# Reporte final del rediseño de febacode.com (15-oct-2026)

## Qué cambió
- **Release A** (producción, `68208d4`): contacto del footer corregido, menú móvil arreglado, enlaces legales muertos fuera, `vercel.json`, metadatos, íconos, `robots.txt`, `sitemap.xml`, contraste de botones, limpieza del repo y contenido ficticio fuera.
- **Release B** (producción, `86230b4`): Home de 7 bloques, cuatro subpáginas de servicio, páginas legales, 404 real, modo claro y oscuro, menú móvil animado, prerender de todas las rutas con SEO por página, imagen Open Graph y salvaguardas de contenido en el build.
- **Pendiente de merge:** rama `fix/menu-foco` (foco del menú móvil; ver abajo).

## Línea base vs. resultado (www.febacode.com, Lighthouse)
| Métrica | Antes (15-oct) | Después |
|---|---|---|
| Rendimiento móvil | 86 | 98 |
| Accesibilidad móvil | 96 | 100 |
| Buenas prácticas móvil | 100 | 96 |
| SEO móvil | 91 | 100 |
| LCP móvil | 3.4 s | 1.9 s |
| FCP móvil | 2.7 s | 1.9 s |
| CLS móvil | 0.002 | 0.009 |
| Escritorio | no medido | 100 · 100 · 96 · 100 (LCP 0.4 s) |
| JS (sin gzip) | 378 KB | 273 KB |
| Rutas indexables | 1 (HTML vacío) | 7 con contenido, título, descripción, canonical y JSON-LD |
| Rutas inexistentes | 404 de texto plano de Vercel | 404 real de marca con `noindex` |

Buenas prácticas baja de 100 a 96 por un aviso de CSP en modo solo reporte (ver pendientes). El CLS sigue dentro del umbral bueno (< 0.1).

## Verificación hecha (Chrome real contra producción)
- 18 corridas del Home (9 anchos de 320 a 2560 px, claro y oscuro) y 24 de las demás rutas: sin desbordamiento horizontal, sin violaciones de axe, un solo `h1` por página, sin objetivos táctiles menores de 44 px, consola sin errores.
- Tema: sigue al sistema, se recuerda, y se aplica antes del primer pintado. Acordeón, selector y teclado funcionan. Sin JavaScript el contenido está en el HTML. Con `prefers-reduced-motion` no queda nada oculto.
- Responsividad del menú móvil comprobada en 320×568, 375×667, 390×844, 430×932 y en horizontal (667×375, 844×390).

## Defecto encontrado después del lanzamiento
El menú móvil animado (commit `c9597f8`) rompió el manejo de foco: el foco no entraba al diálogo y la trampa de foco no actuaba. Se detectó en la verificación posterior a producción. La corrección está en la rama `fix/menu-foco` y se probó en local; **sigue pendiente de merge**. Mientras tanto, producción tiene esa regresión de accesibilidad (el menú sí abre, cierra con Esc y navega; no se atrapa el foco).

## Afirmaciones: cómo activar cada una
En `src/config/claims.js`, `confirmed: true` la publica. Hoy solo `sin-costos-ocultos` está activa. Las demás (`codigo-del-cliente`, `sin-licencias`, `tiempos-de-entrega`, `servidores-propios`, `integraciones-extra`) no aparecen en el HTML y el build falla si alguna se cuela. La pregunta de FAQ "¿El sistema es mío…?" se publica solo cuando `codigo-del-cliente` se confirma y se redacta su respuesta (hoy está en `src/config/faq.js` como `[CONFIRMAR]`). Los precios detallados se activan con `published: true` en `src/config/pricing.js`.

## Pendientes
- Merge de `fix/menu-foco` (foco del menú).
- Revisión legal del Aviso de Privacidad y los Términos (borradores sin razón social).
- CSP en modo solo reporte: el script de tema en `<head>` es inline, así que `script-src 'self'` lo bloquearía si se activa; hay que añadir su hash antes de hacerla obligatoria. Lighthouse marca además un aviso de CSP con una URL `data:` que no identifiqué.
- Validar la imagen Open Graph con WhatsApp y los resultados enriquecidos de Google (requiere la URL en producción).
- Enviar `sitemap.xml` a Google Search Console (lo hace el dueño).
- Los precios de entrada se mantienen; los montos de hosting, mantenimiento y consumo de WhatsApp/IA no están definidos y el sitio los declara como "no incluidos".
- Sin FAQ propia en las subpáginas, sin transiciones entre rutas y agente de IA diferido.
- Revisión en Safari/iPhone real hecha por el dueño; no se verificó con WebKit.
- Revisión adversarial por un revisor aparte: no se hizo.

## Reversión
Instant Rollback en Vercel al despliegue del Release A (`68208d4`), o `git revert -m 1 86230b4` para deshacer el Release B. El último despliegue previo a todo el trabajo fue "Rediseña la landing de Feba Code" (`ea3ee63`).
