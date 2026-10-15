# Fase 0 — Investigación (15-oct-2026)

Solo lectura. No se modificó `src/`. Lo marcado "sin verificar" no se pudo comprobar.

## 1. Alcance: Casa Oliva, UniiMarket y BestPCDeals fuera
Todos son ficticios o nunca se realizaron. Se eliminan por completo (sin demo, sin rótulo, sin copy). Hoy solo existe en `src/components/sections/Hero.jsx` (mock `client-window`, incluye la URL falsa `casaoliva.mx`, botones falsos y un H2) y su CSS en `src/styles/HeroWindow.css`. Se quita en la implementación. El hero necesita otra pieza visual.

## 2. Auditoría del repo (verificado)
- `npm ci && npm run build`: pasa en 3.4 s. JS 377 KB (120 KB gzip), CSS 26 KB, `dist/` 2.5 MB. Node local v22.13.1 (Vercel usa 24.x).
- `npm run lint`: 20 errores (no los 209 del prompt; el repo ya cambió). 15 son falsos positivos de `motion` sin uso (config de ESLint). 5 reales: `index` sin uso, `handleNavClick` sin uso (Navbar) y `comparisonFeatures` sin uso (3 páginas de servicio).
- Estado de `main`: limpia y al día con origin. El último commit ("Rediseña la landing") ya cambió el hero, que ahora es centrado con un mock de Casa Oliva.
- **Componentes sin importar (0 referencias; Projects se borra por decisión del dueño):** `CursorFollower`, `ParallaxEffect`, `Projects`, `Testimonials`, y las 3 páginas `services/*` (existen sin ruta).
- **Dependencias:** `react-scroll` (0 usos), `react-snowfall` (1 uso en archivos de `src/`; verificar si está montado), `react-icons` (solo TikTok), `@vercel/speed-insights` (instalada, **no montada**).
- **Deuda rastreada en git:** `src.zip`, `app/`, `components/` (50 archivos en `components/ui`), `hooks/`, `lib/`, `styles/globals.css`, `public/placeholder*`, `public/vite.svg`. Todo ajeno a Vite + JSX.
- **Assets:** solo 6 se importan (`bpcd_logo`, `experience-tech-illustration`, `feba_completo`, `feba_completo_blanco`, `febaicon1`, `unii.png`). `unii.png` **ya no existe**, y solo `Projects.jsx` (sin uso) lo importa. Sin uso y pesados: `codigo.png` 1.6 MB, `organizacion.png` 1.6 MB, `persona.png` 1.4 MB, `logofondo.png` 1.1 MB. En uso y pesados: `experience-tech-illustration.png` 1.4 MB, `febaicon1.png` 494 KB (favicon). `feba_completo_blanco - copia.png` es duplicado idéntico (84,256 B) y sin seguimiento en git.
- `index.html`: `lang="en"`, `<title>FebaCode</title>`, sin descripción, favicon PNG declarado como SVG.

## 3. Sitio en vivo (verificado con curl)
| Prueba | Resultado |
|---|---|
| `/` | 200, HTML de 476 B con `<div id="root">` vacío |
| `/esto-no-existe` | 404 de Vercel en texto plano (no hay `vercel.json`) |
| `/robots.txt`, `/sitemap.xml`, `/favicon.ico` | 404 los tres |
| `wa.me/525644129078` | 200 |
| Instagram, TikTok, Facebook | 200 con curl (poco concluyente: pueden devolver 200 a la página de login) |

Defectos P0 confirmados en código: `Footer.jsx` línea 208 (`mailto:info@febacode.com` con texto `contacto@`), línea 212 (`tel:+525512345678` con texto `+52 56 4412 9078`), líneas 234-239 (legales con `preventDefault`), líneas 94-115 (Facebook duplicado), columna "Servicios" con un solo enlace.

### Lighthouse móvil, línea base (www.febacode.com)
| Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|
| 86 | 96 | 100 | 91 |

FCP 2.7 s, LCP 3.4 s (meta: ≤ 2.5 s), TBT 30 ms, CLS 0.002, Speed Index 3.5 s. Auditorías fallidas relevantes: sin meta description, contraste de color, imágenes sin dimensiones, formatos de imagen, recursos que bloquean el render, falta `preconnect`. Escritorio: **no medido** (pendiente). JSON crudo en el scratchpad de la sesión.

## 4. Demos: no hay proyectos que mostrar (decisión del dueño)
UniiMarket y BestPCDeals nunca se realizaron (los subdominios tampoco responden: uno falla en TLS y el otro es NXDOMAIN). Junto con Casa Oliva, **no se incluye ninguna demo ni proyecto propio**. Consecuencias:
- Se elimina el bloque 3 "Vitrina interactiva", el ítem "Demos" del menú, la ruta `/demos` y todo el concepto "Feba Labs".
- Se borra del repo `Projects.jsx`, `ProjectCard.jsx`, sus CSS y los assets `bpcd_logo.png` y la referencia a `unii.png`.
- El Home pasa de 8 a 7 bloques y la prueba de confianza se apoya en precios transparentes, el proceso y las preguntas frecuentes (sin clientes ni casos inventados).
- El WhatsApp "al final de la vitrina" se reubica al cierre del bloque de servicios.

## 5. Benchmark (calidad baja, tómalo como orientativo)
Un subagente lo hizo con resúmenes automáticos. Los dominios de Baitana, Iterando y Edit Innovation fueron **inferidos**, y no se verificaron subpáginas ni la posición de los CTAs.
- **FRICODE:** no verificado (no apareció en búsqueda, fricode.com devolvió contenido vacío).
- **Baitana:** el sitio hallado es marketing digital para médicos; puede no ser el competidor que buscas.
- **Iterando (CDMX):** precios completos (landing 15,000 · sitio 30,000 · tienda 45,000 · app 70,000), planes mensuales, tiempos, logos. Sin FAQ ni garantía explícita.
- **Edit Innovation (Guadalajara):** precios, tiempos 2-12 semanas, 3 meses de garantía técnica, FAQ, demo de CRM, CTA a WhatsApp.
- **Granweb:** es de Buenos Aires, no de México; sin precios.
- **Conclusiones útiles:** precios "desde" en MXN visibles, WhatsApp desde la primera pantalla, garantía y tiempos explícitos (en FebaCode van como `[CONFIRMAR]`), subpáginas por servicio y FAQ. Los competidores publican precios bastante más altos que el catálogo de FebaCode (ventaja a comunicar).
- Detalle completo: `scratchpad/benchmark.md`. Si quieres un benchmark sólido, necesito que me des las URLs exactas de los cinco.

## 6. Decisión de renderizado / SEO
| Criterio | (a) Prerender en Vite | (b) Next.js estático | (c) Astro |
|---|---|---|---|
| Esfuerzo | Bajo-medio | Alto (reescritura) | Alto (reescritura de componentes) |
| Riesgo | Bajo | Medio-alto | Medio |
| Reutiliza el código actual | Sí | Parcial | Parcial |
| Compatibilidad con Vercel | Sí (salida estática) | Nativa | Buena |

Hallazgo que cambia la recomendación: `vite-react-ssg@0.9.2` (publicada 15-jul-2026) declara `react-router-dom ^6.14.1` como peer, y el repo usa la **v7**, así que probablemente hay conflicto (sin probar la instalación). Opciones: (a1) probar `vite-react-ssg` con `--legacy-peer-deps` en una rama de prueba; (a2) bajar a Router 6 (el uso del repo es solo `Routes/Route`, bajo riesgo); (a3) prerender propio con un script de build (Vite SSR + `renderToString` por ruta). **Recomendación:** (a) con (a2) o (a3); lo valido en una rama de prueba antes del plan. Solo son 8-9 rutas estáticas, así que (b) y (c) no se justifican. Además, `vercel.json` con rewrite SPA como red de seguridad.

## 7. Agente de IA y `vercel.json` (diseño pendiente, sin costo cotizado)
- `vercel.json` es viable: `rewrites` a `/index.html` (o a las páginas prerenderizadas) y `headers` de seguridad; CSP primero en `Content-Security-Policy-Report-Only`.
- El agente (función `/api/` + API de Anthropic) es posible en este proyecto, pero la estimación de costo la entrego en `agente-ia.md` solo si decides incluirlo en esta ronda. Sin cálculos aún; no se llamó a ninguna API.

## 8. Rama `Johan` (verificado con `git`)
- Trae `PrivacyPolicyPage.jsx`, `TermsAndConditionsPage.jsx` y sus CSS, más las rutas `/politica-de-privacidad` y `/terminos-y-condiciones`.
- Su `App.jsx` renderiza `<Footer />` global además del que ya trae `Home`: **footer duplicado confirmado**. Esa rama también borra `public/email/*`, `src.zip` y varios assets, y cambia ~40 archivos de `src/`, por lo que no se fusiona; solo se copian los 4 archivos legales.
- Revisión del texto legal (no es asesoría legal): la política nombra "Febacode S.A. de C.V." con domicilio `[Dirección Completa de Febacode]` sin llenar. Hay que confirmar la razón social y el domicilio. Se marca como **pendiente de revisión legal**. No verifiqué que cubra finalidades ni derechos ARCO punto por punto.

## 9. Decisiones que necesito de ti
1. ¿Publicamos estas afirmaciones? (código 100% del cliente · sin costos ocultos · sin licencias mensuales · tiempos de entrega · servidores propios). Por defecto: no.
2. Precio del pilar Negocios Locales: ¿"Cotización personalizada" (por defecto) o el rango de Control Básico ($7,000 – $12,000)?
3. ¿Publicamos los precios del catálogo? Confírmalo una vez.
4. ¿"Soluciones que conectan." queda como tagline oficial?
5. ¿Migramos a los HEX oficiales (`#1A1F36`, `#00BFD8`, `#F65F4C`, `#FFFFFF`, `#D9D9D9`)?
6. Sin demos ni proyectos: ¿confirmas que el Home queda de 7 bloques, sin sección de proyectos?
7. ¿El agente de IA entra en esta ronda? Si sí, ¿presupuesto mensual para la API?
8. ¿Qué hago con `public/email/*.html`, `Politica_de_Privacidad_Febacode.pdf` y `feba_completo_blanco - copia.png`?
9. Razón social y domicilio reales para el Aviso de Privacidad.
10. Benchmark: ¿me das las URLs de los cinco competidores para repetirlo bien?

## 10. Decisiones resueltas (15-oct-2026)
1. Afirmaciones: solo se confirma **"sin costos ocultos"** (`confirmed: true`). Código 100% del cliente, sin licencias, tiempos de entrega y servidores propios siguen en `confirmed: false`.
2. Negocios Locales: "Cotización personalizada".
3. Precios: pendiente. Los precios aún no están establecidos. Se construyen con una bandera `published` en `pricing.js` para publicarlos o no sin tocar el diseño.
4. Tagline "Soluciones que conectan." oficial.
5. Paleta: migrar a los HEX oficiales.
6. Agente de IA: se difiere a después del lanzamiento. Queda fuera de esta ronda (sin `agente-ia.md` ahora).
7. Higiene del repo: borrar lo innecesario en un commit aparte y revertible (ver abajo).
8. Sin razón social (la startup aún no está constituida legalmente). El Aviso de Privacidad no puede nombrar "Febacode S.A. de C.V."; se redacta con "FebaCode" como nombre comercial y el responsable por definir. Pendiente de revisión legal.
9. Benchmark: queda como orientativo; se repite más adelante si hay URLs.

### Higiene del repo (se ejecuta en la implementación, commit aparte)
Borrar: `src.zip`, `app/`, `components/`, `hooks/`, `lib/`, `styles/globals.css`, `public/placeholder*`, `public/vite.svg`, `src/assets/feba_completo_blanco - copia.png`, assets sin uso (`codigo.png`, `organizacion.png`, `persona.png`, `logofondo.png`, `empleos.jpg`, `titulo.png`, `feba.png`, `feba_blanco.png` tras verificar), `CursorFollower`, `ParallaxEffect`, `Testimonials` (falsos), `Projects`, y dependencias `react-snowfall` y `react-scroll`.
Se conservan hasta que digas lo contrario: `public/email/*.html` (plantillas con la paleta oficial) y `Politica_de_Privacidad_Febacode.pdf` (menciona una S.A. de C.V. que no existe, conviene retirarlo del repo; lo confirmo contigo).

### Decisión 3 (cerrada)
Se publican **solo los precios de entrada "desde"** por pilar, con la leyenda "Precio de referencia; se afina con tu alcance". Los niveles detallados quedan en `pricing.js` con `published: false`.
