# Fase 1 — Plan de rediseño de febacode.com

Estado: **borrador para aprobación**. No se ha modificado `src/`. Documentos de base: `01-investigacion.md` (hallazgos y decisiones 1-9) y `01b-direccion-diseno.md` (dirección B con modo claro y oscuro).

## 0. Decisiones cerradas (resumen)
- **Dirección:** B "Papel Claro" con modo claro y oscuro (sigue al sistema, con botón para cambiar).
- **Sin proyectos propios ni demos:** Casa Oliva, UniiMarket y BestPCDeals no existen y no aparecen en ningún lado.
- **Afirmaciones:** solo se publica "sin costos ocultos". Código del cliente, sin licencias, tiempos de entrega y servidores propios van con `confirmed: false`.
- **Precios:** solo los "desde" de entrada por pilar, con la leyenda "Precio de referencia; se afina con tu alcance". Negocios Locales: "Cotización personalizada". Los niveles detallados quedan en `pricing.js` con `published: false`.
- **Marca:** "FebaCode" siempre así (una palabra), tagline "Soluciones que conectan.", paleta oficial.
- **Agente de IA:** fuera de esta ronda.
- **Sin razón social:** el Aviso de Privacidad no puede nombrar una S.A. de C.V.

## 1. Requisito de responsividad (nuevo, obligatorio)
La página debe verse y funcionar bien en **todos los iPhone y en monitores de tamaños comerciales**. Se diseña mobile-first y fluido (no solo en saltos fijos).

**Matriz de verificación** (anchos CSS en px; los de iPhone reciente son de referencia de memoria, marcados *sin verificar* hasta medirlos en emulación):

| Grupo | Dispositivos / tamaños | Ancho × alto |
|---|---|---|
| iPhone compactos | SE (1.ª gen) 320×568 · SE 2/3 y 8 375×667 · mini 12/13 375×812 | 320-375 |
| iPhone estándar | 12/13/14 390×844 · 14 Pro/15/15 Pro 393×852 · 16/16 Pro/17 402×874 *(sin verificar)* | 390-402 |
| iPhone grandes | 14 Plus/15 Plus/16 Plus 430×932 · 16 Pro Max/17 Pro Max 440×956 *(sin verificar)* · Air 420×912 *(sin verificar)* | 420-440 |
| iPhone horizontal | 844×390 y 932×430 (con notch lateral) | 844-932 |
| Tablet (iPad) | mini 744×1134 · Air 820×1180 · Pro 11" 834×1194 · Pro 12.9" 1024×1366 | 744-1024 |
| Laptops y monitores | 1280×720 · 1366×768 · 1440×900 · 1536×864 · 1920×1080 | 1280-1920 |
| Monitores grandes | 2560×1440 · 3440×1440 (ultra ancho) · 3840×2160 (4K) | 2560-3840 |

Además de Android estándar (360×800, 412×915), que cae en el mismo rango fluido.

**Reglas de implementación**
1. Mobile-first con `clamp()` para tipografía y espaciado; puntos de ajuste de diseño en 480, 768, 1024, 1280 y 1920 px solo donde el diseño cambie (ya se probó que el hero funciona a 375 y 1440).
2. Contenedor máx. 1360 px con gutter `clamp(16px, 5vw, 64px)`. A partir de 2200 px la base tipográfica sube (112.5 %) y a 3200 px (125 %) para que en 4K no se vea diminuta; el contenido sigue centrado y limitado.
3. Unidades de viewport modernas (`svh`/`dvh`) en lugar de `100vh` (corrige la barra de Safari). `viewport-fit=cover` y `env(safe-area-inset-*)` en encabezado, botón flotante y pie para el notch y la barra inferior de iPhone.
4. Objetivos táctiles ≥ 44×44 px; nada que dependa solo de `:hover`; en 320 px no hay desbordamiento ni texto recortado.
5. En iPhone horizontal el hero no depende de la altura (no se usa altura de viewport fija); el menú móvil se desplaza si no cabe.
6. Inputs a ≥ 16 px (si llegara a haber alguno) para evitar el zoom automático de iOS.
7. Imágenes con `srcset`, `width/height` y `loading="lazy"` fuera del primer viewport.

**Cómo se verifica:** por cada bloque, capturas en 320, 375, 390, 430, 768, 1024, 1440, 1920 y 2560 px, en claro y en oscuro; un script de Playwright que falla si `scrollWidth > clientWidth` en cada ancho; emulación de iPhone horizontal.
**Límite honesto:** Playwright emula con Chromium, no con Safari/WebKit real. Las rarezas de iOS (barra dinámica, notch real, tipografía del sistema) no se pueden confirmar al 100 % ahí. Pido que revises el preview de Vercel en tu iPhone (y de preferencia uno compacto y uno grande) antes de cada lanzamiento.

## 2. Sitemap y navegación
```
/                                  Home (7 bloques)
/servicios/desarrollo-web
/servicios/sistemas-empresariales
/servicios/plataformas-con-ia
/servicios/negocios-locales
/politica-de-privacidad            (texto pendiente de revisión legal)
/terminos-y-condiciones            (texto pendiente de revisión legal)
*  404 de marca, sobria
```
**Encabezado fijo:** FebaCode (logo) · Servicios · Precios · Proceso · Preguntas · Contacto · botón de tema · botón "WhatsApp" (naranja). 5 ítems + 2 controles. En móvil: logo, botón de tema, WhatsApp y botón de menú; el menú se abre fuera del `<nav>` (portal), con focus trap, `Esc` y `aria-expanded`. "Servicios" abre un submenú en escritorio y se expande en el menú móvil con los 4 pilares. Un solo origen de datos: `src/config/nav.js`.
**Botón flotante de WhatsApp:** siempre visible, con margen seguro, sin tapar contenido ni controles.
**Skip link** "Saltar al contenido" y landmarks `header`, `nav`, `main`, `footer`.

## 3. Home: 7 bloques (copy en español de México)
Marca siempre "FebaCode". Texto de botones naranja y aqua en `#1A1F36`. Un solo CTA primario por pantalla.

### Bloque 1 — Hero (`#inicio`)
- Etiqueta: "Software e IA · Ciudad de México"
- H1: "Tecnología que convierte **ideas complejas** en resultados."
- Subtítulo: "Desarrollo a la medida, claro y a precio accesible para tu negocio."
- CTA primario (WhatsApp, contexto `hero`): "Cotizar por WhatsApp en 2 minutos". Secundario (aqua): "Ver precios" (ancla a Bloque 4).
- Insignias: "Landing desde $3,500 MXN" · "Sin costos ocultos".
- Pieza visual: panel con chips (Sitio web · Sistema · IA · Negocio local); al elegir uno muestra nombre, descripción corta y precio de entrada. Pilar 4: "Cotización personalizada".
- Móvil (375×667): etiqueta, H1, subtítulo y ambos botones visibles sin scroll; el panel va debajo. Escritorio: dos columnas (texto / panel).

### Bloque 2 — Cuatro pilares (`#servicios`)
- Etiqueta: "Qué hacemos". H2: "Cuatro formas de dar el salto digital".
- Tarjetas (ícono, descripción, "desde", enlace):
  1. **Desarrollo Web** — "Tu negocio en internet, listo para recibir clientes." · Desde $3,500 MXN → `/servicios/desarrollo-web`
  2. **Sistemas Empresariales** — "Ventas, inventario y reportes en un solo lugar." · Desde $7,000 MXN → `/servicios/sistemas-empresariales`
  3. **Plataformas con IA** — "Atiende y automatiza lo repetitivo con inteligencia artificial." · Desde $7,000 MXN → `/servicios/plataformas-con-ia`
  4. **Soluciones para Negocios Locales** — "Algo hecho a la medida de tu restaurante, clínica, gimnasio o tienda." · Cotización personalizada → `/servicios/negocios-locales`
- Pie del bloque: texto "Precio de referencia; se afina con tu alcance" y WhatsApp (contexto `servicios`): "Cuéntanos tu caso".
- Escritorio 4 columnas (2×2 en tablet, 1 en móvil).

### Bloque 3 — Tecnología Tranquila (`#nosotros`)
- Etiqueta: "Cómo trabajamos". H2: "Tecnología tranquila, hecha para ti".
- Cuatro principios, una línea cada uno:
  1. **Claridad** — "Te explicamos todo sin tecnicismos."
  2. **Utilidad real** — "Construimos solo lo que tu negocio necesita."
  3. **Hecho a tu medida** — "Nada enlatado: cada sistema se adapta a ti."
  4. **Confianza y precio accesible** — "Sin costos ocultos." *(única afirmación de costos publicada)*
- Texto de apoyo: "Somos una startup mexicana en Ciudad de México." (hechos del ADN; sin cifras ni clientes).
- Los demás matices ("equipo ágil", "infraestructura ligera") van como texto interno hasta confirmarse.

### Bloque 4 — Inversión transparente (`#precios`)
- Etiqueta: "Precios". H2: "Sabes cuánto invertir desde el primer día".
- Tabla/tarjetas de entrada: Web desde $3,500 · Sistemas desde $7,000 · IA desde $7,000 · Negocios Locales: cotización personalizada.
- Leyenda: "Precio de referencia en MXN; se afina con tu alcance. Sin costos ocultos."
- Comparativa **Por proyecto** (un pago por lo que necesitas) vs **Acompañamiento mensual** (hosting, mantenimiento, soporte y mejoras): el catálogo no trae precio de lo mensual, así que dice "Se cotiza según tu proyecto". **Decisión abierta (#A)**.
- CTA WhatsApp pegado a los precios (contexto `precios`): "Cotizar mi proyecto".

### Bloque 5 — Proceso en 4 pasos + integraciones (`#proceso`)
- Etiqueta: "Proceso". H2: "De tu idea a tu lanzamiento en cuatro pasos".
- Pasos con una línea que se dibuja al hacer scroll (trazo SVG, `transform`/`stroke-dashoffset`): 1 **Entendemos tu problema.** 2 **Prototipo visual rápido.** 3 **Desarrollo a medida.** 4 **Lanzamiento y acompañamiento.** (sin duraciones).
- Integraciones, como texto en chips, solo las del catálogo: WhatsApp · Facebook · Stripe · PayPal · MercadoPago · Google Sheets y Excel · CFDI 4.0. Se usa texto, sin logos de terceros. Odoo, CONTPAQi, Google Cloud, etc. quedan en `claims.js` sin confirmar.

### Bloque 6 — Preguntas frecuentes (`#preguntas`)
Acordeón accesible con JSON-LD `FAQPage` (solo de las preguntas visibles).
1. **¿Cuánto cuesta una página o un sistema?** "Una landing desde $3,500 MXN; sistemas e inteligencia artificial desde $7,000 MXN. El precio exacto depende de tu alcance y te lo damos claro por WhatsApp, sin costos ocultos."
2. **¿En cuánto tiempo entregan?** Respuesta pública: "Depende del alcance. Lo definimos contigo en la cotización." La versión con plazos por tipo de proyecto queda con `[CONFIRMAR]` y no se publica.
3. **¿Qué pasa si necesito cambios después?** "Puedes pedirlos cuando quieras. Los cambios y el mantenimiento se cotizan como acompañamiento mensual o por proyecto."
4. **¿Cómo sé si mi negocio necesita IA o un sistema a medida?** "Si repites tareas a mano (responder lo mismo, capturar datos, llevar inventario), probablemente sí. Cuéntanos cómo trabajas y te recomendamos lo mínimo que necesitas."
5. **¿El sistema es mío o pago una renta eterna?** **Oculta** hasta que confirmes la propiedad del código y las licencias (`[CONFIRMAR]`). Si no se confirma, el acordeón queda con 4 preguntas.

### Bloque 7 — Cierre de conversión (`#contacto`)
- H2: "Platiquemos de tu proyecto". Texto: "Cuéntanos qué necesitas y te respondemos por WhatsApp."
- CTA primario (contexto `cierre`): "Cotizar por WhatsApp en 2 minutos". Secundario: correo `contacto@febacode.com`. Teléfono visible: +52 56 4412 9078 (`tel:+525644129078`). Ubicación: Ciudad de México.
- Sin formulario (no se capturan datos personales).

### Pie de página
Logo, "Soluciones que conectan.", redes (Instagram `@febacode`, TikTok `@febacode`, Facebook `/febacode`, una sola vez cada una, objetivos táctiles ≥ 44 px), columnas Navegación y Servicios (los 4 pilares) y Contacto, Aviso de Privacidad y Términos, © año y "FebaCode". Texto legal ≥ 12 px.

## 4. Subpáginas de servicio (misma estructura)
Hero (H1, descripción, "desde", CTA WhatsApp con contexto propio) · "Qué incluye" en 4-6 puntos simples · "Para quién es" · "Cómo lo hacemos" (proceso de 4 pasos) · **Niveles y precios** (oculto con `published: false`; sin él, se muestra solo el "desde") · FAQ del servicio · CTA final. `Service` en JSON-LD sin precios ni ratings.
- **Desarrollo Web:** landing, sitio profesional, tienda/reservaciones con pagos (Stripe, PayPal, MercadoPago), menú QR, SEO. Extras: hosting, SEO, mantenimiento.
- **Sistemas Empresariales:** punto de venta, inventario, reportes, ingresos/egresos, agendamiento, CFDI 4.0, CRM, dashboards.
- **Plataformas con IA:** chatbots para web, WhatsApp y Facebook, extracción de datos a Excel/Sheets, analítica y automatización.
- **Negocios Locales:** "Cotización personalizada". Explica el enfoque a la medida para restaurante, clínica, consultorio, gimnasio, barbería, abarrotes. Sin demos ni casos.
- Corrijo los errores de las páginas existentes (título "Plataformas con IA" en la de Sistemas, "Escencial", precios "Desde" mal puestos): se reescriben desde `pricing.js`.

## 5. Arquitectura y árbol de componentes
```
src/config/{site,pricing,claims,nav,motion}.js
src/styles/tokens.css            tokens claros/oscuros + escala + espaciado + radios
src/components/layout/{Header,MobileMenu,Footer,SkipLink,ThemeToggle,WhatsAppFab}.jsx
src/components/ui/{Button,Badge,Card,Accordion,SectionHeading}.jsx
src/components/home/{Hero,ServicePicker,Pillars,Principles,Pricing,Process,Faq,Closing}.jsx
src/pages/{Home,ServicePage,PrivacyPolicy,Terms,NotFound}.jsx
src/lib/{reveal.js}              IntersectionObserver de entrada, una sola vez
```
- `waLink(contexto)`: `https://wa.me/525644129078?text=…` con mensaje distinto por `hero | servicios | precios | cierre | flotante | <servicio>`.
- `claims.js`: `{ id, texto, confirmed }`; solo `sin-costos-ocultos` es `true`. Un test de build falla si algo con `confirmed: false` aparece en el HTML.
- `pricing.js`: catálogo completo del §4.1; `published` por nivel; solo las entradas "desde" se publican.
- `motion.js`: duraciones y curva única `cubic-bezier(.2,.7,.2,1)`. Preferencia por CSS; framer-motion solo si hace falta (`LazyMotion`).
- Eliminar: `CursorFollower`, `ParallaxEffect`, `Testimonials`, `TestimonialCard`, `Projects`, `ProjectCard`, mock de Casa Oliva, `react-snowfall`, `react-scroll`.

## 6. Tareas

Esfuerzo: S ≈ medio día o menos, M ≈ 1 día, L ≈ varios días. Dependencias entre corchetes.

### Release A — Hotfix (rama `feat/hotfix-p0`, sin rediseño visual)
| # | Tarea | Esf. | Dep. | Criterio de aceptación |
|---|---|---|---|---|
| A1 | `config/site.js` con contacto único y `waLink` | S | — | Teléfono y correo definidos en un solo archivo; se usan en Footer, Navbar y CTA |
| A2 | Corregir Footer: `tel:+525644129078`, `mailto:contacto@febacode.com`, quitar Facebook duplicado, enlazar servicios | S | A1 | `curl` del HTML renderizado muestra los destinos correctos; solo un ícono de Facebook |
| A3 | Quitar los enlaces legales muertos del pie (decisión #B). Las páginas legales se publican en Release B | S | A2 | El pie no tiene enlaces que no llevan a nada; no existe `href="#privacidad"` ni `#terminos` |
| A4 | Menú móvil: portal a `body`, sin `transform` heredado, focus trap, `Esc`, no ocultar el navbar con el menú abierto | M | — | Playwright a 375 px: el menú cubre la pantalla con fondo, los enlaces son clicables y `Esc` cierra |
| A5 | Quitar "Proyectos" del menú móvil; menú desde una sola lista | S | A4 | Todos los enlaces del menú llevan a secciones que existen |
| A6 | `vercel.json`: rewrite SPA + cabeceras de seguridad (CSP en report-only) | S | — | Una ruta profunda recargada devuelve 200 y la 404 de marca; las cabeceras aparecen con `curl -I` |
| A7 | `index.html`: `lang="es-MX"`, título y descripción base, conjunto de íconos (ico, 32, 180, 192, 512) y `site.webmanifest` | S | — | Lighthouse SEO sin "meta description"; `/favicon.ico` responde 200 |
| A8 | `robots.txt` y `sitemap.xml` | S | A3 | Ambos responden 200 con las rutas reales |
| A9 | Contraste del botón primario: texto `#1A1F36` sobre naranja | S | — | Ratio ≥ 4.5 (medido 5.15) |
| A10 | Montar `@vercel/speed-insights` | S | — | La señal aparece en la consola/Network sin errores |
| A11 | Corregir ESLint (`react/jsx-uses-vars`) y los 5 errores reales | S | — | `npm run lint` limpio |
| A12 | Higiene del repo en commit aparte y revertible (lista en `01-investigacion.md` §10) | M | — | `npm run build` verde; sin `app/`, `components/ui` shadcn, `src.zip`, placeholders |
| A13 | Eliminar testimonios falsos, mock de Casa Oliva y código de proyectos | S | A12 | `grep -ri "oliva\|VetCare\|GymFit\|FashionStore\|unii\|bestpc"` sin resultados |
Puerta de lanzamiento A: build y lint limpios, preview revisado por ti en iPhone y escritorio, tu OK explícito para merge.

### Release B — Rediseño (rama `feat/rediseno-web-v2`, desde `main` tras A)
| # | Tarea | Esf. | Dep. | Criterio de aceptación |
|---|---|---|---|---|
| B1 | `tokens.css` (claro/oscuro), tipografía autoalojada (`@fontsource`), `claims.js`, `pricing.js`, `nav.js`, `motion.js` | M | A | Sin HEX sueltos en componentes; Manrope y DM Mono cargan sin `@import`; los tokens cumplen AA en ambos modos |
| B2 | Spike de prerender: probar `vite-react-ssg` con Router 7 / bajar a Router 6 / script propio | M | B1 | Informe breve con la opción que genera HTML con contenido para `/` y `/servicios/*`; elegida y justificada |
| B3 | Base de layout: Header, MobileMenu, Footer, SkipLink, ThemeToggle, WhatsAppFab | L | B1 | Landmarks correctos; foco visible; cambio de tema persistente sin destello; responsivo en la matriz (§1) |
| B4 | Componentes `ui` (Button, Badge, Card, Accordion, SectionHeading) | M | B1 | Estados de hover, foco y presionado; `:active` escala .97; objetivo ≥ 44 px |
| B5 | Bloque 1 Hero y ServicePicker | M | B3, B4 | Mobile 375×667 muestra H1, subtítulo y CTAs sin scroll; LCP ≤ 2.5 s; sin salto de layout |
| B6 | Bloque 2 Pilares | M | B4 | 4 tarjetas con precios de `pricing.js`; enlaces a subpáginas funcionan |
| B7 | Bloques 3 y 4 (Principios y Precios) | M | B4 | Solo se publica "sin costos ocultos"; solo precios "desde" |
| B8 | Bloque 5 Proceso + línea SVG | M | B4 | La línea se dibuja con el scroll; con `prefers-reduced-motion` aparece completa |
| B9 | Bloque 6 FAQ + JSON-LD | M | B4 | Acordeón accesible por teclado; el JSON-LD solo incluye las preguntas visibles |
| B10 | Bloque 7 Cierre y pie | S | B4 | `tel:`, `mailto:` y `wa.me` correctos en el HTML |
| B11 | Subpáginas de servicio (×4) | L | B6 | Rutas con título, descripción, canonical y `Service` únicos; precios desde `pricing.js`; sin demos |
| B12 | Prerender + SEO técnico | L | B2, B11 | `curl` de cada ruta trae contenido, `title`, `description`, canonical y JSON-LD sin JS; OG 1200×630 generada con la marca; sitemap actualizado |
| B13 | Transiciones de ruta, motion pass y reveals | M | B5-B11 | CLS 0; solo `transform`/`opacity`; ≤ 1 elemento con movimiento infinito por pantalla; 60 fps percibidos con CPU 4× |
| B14 | 404 de marca sobria | S | B3 | Ligera, sin partículas ni flotantes |
| B15 | Pase de responsividad (matriz §1) | L | B5-B11 | Sin `scrollWidth > clientWidth` en ningún ancho de la matriz, en claro y en oscuro; revisión tuya en iPhone |
| B16 | Pase de rendimiento y accesibilidad | M | B15 | Lighthouse móvil: Rendimiento ≥ 90, Accesibilidad ≥ 95, Buenas prácticas ≥ 95, SEO ≥ 95, en ambos modos; 0 problemas críticos o serios de axe |
| B17 | Imágenes: optimizar a WebP/AVIF, ninguna > 200 KB sin justificar | S | B5 | Peso de assets reducido; `width`/`height` y `loading` correctos |
| B18 | Reporte final `03-reporte-final.md` con línea base vs. resultado | S | B16 | Tabla comparativa con los números de `01-investigacion.md` §3 |

## 7. Pruebas
- **Siempre:** `npm run build` y `npm run lint` limpios en cada commit.
- **Por bloque (Playwright):** capturas 320/375/390/430/768/1024/1440/1920/2560 en claro y oscuro, hover/foco/clic, menú móvil, acordeón, enlaces de WhatsApp, consola y red sin errores, `prefers-reduced-motion` emulado, CPU 4×.
- **Responsividad:** script de `scrollWidth` por ancho (§1) y emulación de iPhone horizontal.
- **Enlaces:** recorrer todos los internos, externos, `tel:`, `mailto:` y `wa.me`.
- **HTML servido:** `curl` por ruta; confirmar que ninguna afirmación con `confirmed: false` esté en el HTML.
- **Revisión adversarial** por un subagente distinto: texto inventado, precios fuera de catálogo, enlaces rotos y regresiones.
- **En tu iPhone:** revisión del preview de Vercel (el único chequeo real de Safari/WebKit).
- **No verificable por mí:** apariencia exacta en Safari real, rendimiento en dispositivos reales, validadores de Open Graph de WhatsApp y resultados enriquecidos de Google (se hacen con la URL de preview/producción).

## 8. Riesgos y mitigaciones
| Riesgo | Mitigación |
|---|---|
| Dos modos de color duplican la verificación | Tokens semánticos; ningún bloque se da por terminado sin AA y capturas en ambos modos |
| `vite-react-ssg` no es compatible con Router 7 | Spike B2 con tres salidas (compatibilidad, bajar a Router 6 o script propio) |
| Texto legal con una entidad inexistente | No publicar la versión de `Johan` tal cual; decisión #B |
| Publicar precios aún no establecidos | Solo "desde"; leyenda de referencia; bandera `published` para ocultar todo |
| Afirmaciones sin confirmar se cuelan | `claims.js` con prueba de build que falla |
| Menos prueba social por no tener clientes ni demos | Se compensa con precios, claridad y proceso; sin inventar nada |
| Safari/iOS se comporta distinto | `svh/dvh`, `safe-area`, revisión tuya en iPhone en cada preview |
| El Aviso de Privacidad no cumple con LFPDPPP | Marcado "pendiente de revisión legal"; sin asesoría legal en este plan |

## 9. Ramas y reversión
- Partir de `main` actualizada (`git fetch && git pull --ff-only`). Ramas: `feat/hotfix-p0` (Release A) y `feat/rediseno-web-v2` (Release B, desde `main` después de A). Commits chicos en español, cada uno con build verde.
- Traer lo legal de `Johan` con `git checkout origin/Johan -- <4 archivos>`; no fusionar la rama ni sobrescribir `App.jsx`, `Home.jsx` ni `Footer.jsx`.
- Sin `push --force`, sin borrar ramas remotas, sin merge a `main` sin tu OK. PR contra `main` con descripción en español, capturas y riesgos.
- **Reversión:** Instant Rollback en el panel de Vercel (o `vercel rollback`) al último despliegue bueno. **Último despliegue bueno en producción (según el dueño, 15-oct-2026): "Rediseña la landing de Feba Code" (commit `ea3ee63`, `main`).** Si el Release A falla en producción, se restaura ese despliegue con Instant Rollback. La higiene del repo va en commit aparte para poder revertirla con `git revert`.
- No se cambia DNS, dominios ni variables de entorno sin preguntarte.

## 10. Decisiones de la ronda 2 (resueltas)
- **#A Precios:** `Precios.docx` (raíz del repo) coincide exactamente con el catálogo del §4.1. Se autorizó ajustarlos para ser competitivos. Resultado del análisis en `04-precios.md`: **no cambio las cifras** (evidencia de mercado insuficiente y verificada solo en parte), pero sí agrego que se declaren los costos recurrentes no incluidos, para que "sin costos ocultos" sea cierto. La comparativa "Por proyecto vs. Acompañamiento mensual" se publica sin precio mensual ("se cotiza según tu proyecto").
- **#B Legal:** Release A **quita** los enlaces legales muertos (en vez de publicar un texto incorrecto). Release B publica `/politica-de-privacidad` y `/terminos-y-condiciones` reescritos sin "S.A. de C.V.": "FebaCode" como nombre comercial, `contacto@febacode.com` como medio para derechos ARCO, sin domicilio inventado. Recomiendo una revisión legal antes de lanzar B; no es asesoría legal.
- **#C Archivos:** se conservan `public/email/*.html` (plantillas con la paleta oficial) y se elimina `Politica_de_Privacidad_Febacode.pdf` en el commit de higiene, que se puede revertir.
- **#D FAQ #5** (propiedad del código): se deja para después; permanece oculta.
- **#E iPhone:** el dueño revisará los previews de Vercel en su iPhone.

## 11. Lo que no verifiqué
Dimensiones de los iPhone más recientes (16/17/Air), estado de despliegues en Vercel, compatibilidad real de prerender con Router 7, el revelado circular de tema a mitad de animación, y el comportamiento de los validadores externos. Todo se comprueba durante la implementación y se reporta.
