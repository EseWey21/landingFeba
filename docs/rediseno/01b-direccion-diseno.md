# Fase 0.5 — Dirección de diseño

Prototipos del hero: `prototipos/A-marino-vivo.html`, `B-papel-claro.html`, `C-conexion.html`. Capturas a 1440 y 375 px: `prototipos/{A,B,C}-{1440,375}.png`. Para verlos en vivo: `npx http-server docs/rediseno/prototipos -p 5191` y abre `localhost:5191/<archivo>`.

Alcance: sin demos ni proyectos propios (Casa Oliva, UniiMarket y BestPCDeals no existen). El hero usa una pieza visual original en HTML/CSS/SVG, sin imágenes de terceros. Precios: solo "desde" de entrada. Paleta oficial únicamente.

## 1. Referencias analizadas (solo principios)
Herramienta: `/taste` (revisé su `SKILL.md` y `extract.js`: solo leen el DOM con Playwright, sin red ni scripts externos). Usé una versión resumida de `extract.js` (colores, tipografía, radios, espaciado, transiciones, botones) y no generé los 4 pasos completos ni los archivos `{dominio}.md/json`. Es un análisis más corto que el de la skill.

**Estructural: iterando.mx** (CDMX, verificado en vivo). Tomo:
- Hero de una sola idea: etiqueta corta, titular enorme con una frase resaltada, un CTA oscuro y uno claro, y WhatsApp flotante visible.
- Navegación de 4 ítems más CTA, y botones en píldora de 12-17 px de relleno vertical.
- Transiciones con una sola curva `cubic-bezier(0.2, 0.7, 0.2, 1)` a 0.25-0.35 s.
- Usa también Manrope: confirma que nuestra tipografía actual es válida.
Evito: su volumen de bloques (la página mide ~7,800 px) y las tarjetas inclinadas con casos de clientes (nosotros no tenemos casos).

**Visual: linear.app** (verificado en vivo). Tomo:
- Fondo casi negro, texto en tres niveles de gris y un solo acento; jerarquía por opacidad, no por color.
- Titular 64/64 px con tracking negativo (-1.4 px) y peso 510; contención extrema.
- Micro-transiciones de 100-160 ms con una curva corta.
Evito: la densidad de interfaz de producto, el monoespaciado en todo el contenido y su estética de "herramienta para ingenieros", que no habla a un restaurante o una clínica.

Limitación: no pude medir fluidez ni peso real de sus animaciones; lo anterior sale de estilos computados y capturas.

## 2. Tres direcciones

| | A · Marino Vivo | B · Papel Claro | C · Conexión (recomendada) |
|---|---|---|---|
| Concepto | Panel de servicios con precios sobre fondo marino, titular que se revela palabra por palabra | Sitio claro y editorial con un selector interactivo de servicio | Un esquema que conecta "tu negocio" con los cuatro pilares, a juego con el tagline |
| Mood | Seguro, de producto | Amable, limpio, cercano | Técnico y claro, con carácter |
| Fondo | Azul marino `#1A1F36` | Blanco `#FFFFFF`, grises `#D9D9D9` | Azul marino `#1A1F36` |
| Aqua `#00BFD8` | Palabras clave, precios, etiquetas | Resaltado de fondo (texto marino encima), botón secundario | Líneas, palabras clave, nodos activos, botón secundario |
| Naranja `#F65F4C` | Solo CTA primario, texto `#1A1F36` | Igual | Igual |
| Tipografía | Manrope 800 + DM Mono | Manrope 800 + DM Mono | Manrope 800 + DM Mono |
| Hero | Tarjeta con 4 filas y precios, inclinación leve con el puntero | Panel oscuro con 4 chips; al elegir uno cambia descripción y precio | Red SVG que se dibuja; al pasar o enfocar un nodo muestra servicio y precio de entrada |
| Motion | Entrada por palabras enmascaradas, inclinación 3D sutil | Subrayado que se rellena, fundidos cortos | Trazado de líneas, desplazamiento mínimo con el puntero (máx. 6 px) |
| Riesgo | Se parece a muchos sitios SaaS oscuros | Menos "wow" a primera vista; el aqua solo como fondo | El esquema puede leerse como decoración si no se entiende; requiere explicar en un vistazo |

### Tres decisiones de diseño por dirección (criterio de `emil-design-eng`)
**A**
1. Los precios de entrada viven en el hero. Quien llega por precio lo ve sin hacer scroll; baja la barrera sin añadir un bloque.
2. Un solo momento de impacto: el titular enmascarado (~0.8 s). Lo demás es estático, así que el LCP no espera a la animación.
3. Botones con `:active { scale(.97) }` y transiciones solo de `transform`/`box-shadow`, nunca `all`.

**B**
1. El selector de 4 chips sustituye 4 tarjetas: una idea por pantalla, tres cosas visibles a la vez (chips, descripción, precio).
2. El cambio de contenido usa 350 ms con `ease-out`; es retroalimentación inmediata y no bloquea la lectura. No se anima el cambio por teclado más de lo necesario.
3. El aqua nunca es texto sobre blanco (2.22:1): se usa como fondo con texto `#1A1F36` (7.30:1).

**C**
1. La pieza visual es el concepto: "tu negocio" al centro y cuatro pilares conectados. Comunica "Soluciones que conectan" sin una sola imagen de terceros.
2. Los nodos son botones reales (48 px de alto, foco visible, hover y foco muestran lo mismo): un patrón accesible por teclado, con la información también disponible sin puntero.
3. El movimiento del puntero está limitado a 12 px y a escritorio con puntero fino; en móvil y con `prefers-reduced-motion` desaparece y las líneas aparecen ya dibujadas.

## 3. Recomendación: C · Conexión
- Es la única donde la pieza visual comunica la propuesta (cuatro pilares, un negocio, todo conectado) y reemplaza al mock de Casa Oliva con algo original y ligero (SVG, ~2 KB).
- Mantiene "Tecnología Tranquila": un solo elemento con movimiento por pantalla, mucho aire.
- Es la más barata de mantener y de optimizar (HTML/CSS/SVG, sin librerías de motion).
- Su riesgo principal es que el esquema no se entienda a la primera. Mitigación: etiqueta "Toca un servicio", precios en el estado por defecto y pruebas con 3-5 personas del público objetivo antes de cerrar.
- Si prefieres menos riesgo y más calidez, la segunda opción es B. A es la más común y la menos distintiva.

### Observaciones de los prototipos (verificadas)
- Sin desbordamiento horizontal a 375 px (`scrollWidth` 360 con barra de desplazamiento).
- A 375×667 se ven titular, subtítulo y ambos botones sin hacer scroll. En C la red queda debajo del primer viewport en móvil; el hero cumple por texto y CTA, pero la pieza visual no se ve de entrada.
- Corregí un fallo propio: el botón "WhatsApp" del encabezado se estiraba a ancho completo en móvil.
- Pendiente: en B el resaltado aqua se parte en dos líneas; falta `box-decoration-break: clone`.
- No grabé video (pide habilitar `devtools` del MCP, no lo hice). Movimiento sin probar en dispositivo real ni con CPU a 4× de ralentización.
- Las fuentes se cargaron desde Google Fonts solo para los prototipos; en producción se autoalojan.
- La consola de A mostró 1 error al cargar (no lo investigué; probablemente el favicon ausente).

## 4. Sistema de diseño de la recomendada (C)

**Color (tokens CSS)**
`--navy #1A1F36` · `--aqua #00BFD8` · `--coral #F65F4C` · `--white #FFFFFF` · `--gray #D9D9D9`. Derivados permitidos solo como opacidad de estos (p. ej. `rgba(255,255,255,.1)` para bordes). Superficie elevada sobre marino: mezcla de marino y blanco al 6-8% (verificar contraste).
Reglas: texto de botón naranja y aqua en `--navy`; aqua como texto solo sobre marino.

**Tipografía** Manrope (400/600/800) y DM Mono (400/500), autoalojadas con `@fontsource` y `font-display: swap`.
Escala (móvil → escritorio): H1 `clamp(36px, 5.4vw, 68px)` / 1.03 / -0.035em · H2 `clamp(28px, 3.6vw, 44px)` / 1.1 · H3 22 px · cuerpo 18 px / 1.5 · etiqueta DM Mono 13 px, mayúsculas, +0.08em · texto legal ≥ 12 px.

**Espaciado** base 8 px: 8, 16, 24, 32, 48, 72, 96. Separación entre secciones 96 px en escritorio y 64 px en móvil. Contenedor 1360 px, gutter `clamp(16px, 5vw, 64px)`.

**Radios** 14 px (tarjetas pequeñas), 24 px (paneles), 999 px (botones y chips). **Sombras** una sola: `0 40px 80px -30px rgba(0,0,0,.6)` en superficies elevadas; en botón primario, halo coral al pasar el cursor.

**Z-index** nav 50 · menú móvil 60 · WhatsApp flotante 40 · modales no se usan.

**Componentes**
- *Botón primario:* fondo coral, texto marino, 52 px de alto, píldora; hover sube 2 px; `:active` escala .97.
- *Botón secundario:* fondo aqua con texto marino (o contorno aqua sobre marino).
- *Tarjeta de pilar:* superficie elevada, radio 24, ícono, 2 líneas de texto, "desde $X" en DM Mono, enlace a la subpágina; toda la tarjeta es objetivo táctil.
- *Badge/etiqueta:* DM Mono 13 px, punto aqua opcional.
- *Acordeón FAQ:* botón de 56 px, `aria-expanded`, panel que anima con `grid-template-rows` (sin animar `height`).
- *Encabezado de sección:* etiqueta DM Mono + H2 + una línea de apoyo (máx. 34 caracteres por línea de lectura de 60).
- *Botón flotante de WhatsApp:* 56 px, esquina inferior derecha, margen seguro del borde; pulso discreto una vez cada ~8 s, desactivado con `prefers-reduced-motion`.

**Motion** (archivo `src/config/motion.js` en la implementación)
Duraciones: micro 120-180 ms · interfaz 200-320 ms · sección 500-700 ms · hero ≤ 1.2 s. Curva única `cubic-bezier(.2,.7,.2,1)` (la misma que usa Iterando y la que ya funciona en los prototipos). Solo `transform` y `opacity`. Reveals con `IntersectionObserver`, una sola vez, retraso escalonado de 60-80 ms. Se prefiere CSS; framer-motion solo si hace falta, con `LazyMotion`.
Con `prefers-reduced-motion`: estado final inmediato o fundido de 150 ms.

**Storyboard del hero (C), ≤ 1.2 s**
1. 0 ms: etiqueta, titular, subtítulo y CTAs visibles (el contenido nunca espera a la animación; subida de 16 px y fundido de 0.7 s, escalonados 0.12 s).
2. 500-1,100 ms: las cuatro líneas se dibujan desde el centro (trazo SVG, 1.1 s, escalonadas 0.2 s).
3. 500-950 ms: aparecen los nodos Web, Sistemas, IA y Negocio local.
4. Reposo: sin movimiento infinito. Con puntero fino, la red se desplaza como máximo 12 px.
5. Interacción: hover o foco en un nodo lo resalta (escala 1.06) y muestra servicio y precio de entrada debajo.

## 5. Decisión del dueño: B (fondo blanco) con modo claro y oscuro
Eligió la dirección B y pidió soportar ambos modos, también como muestra de capacidad técnica. Prototipo: `prototipos/B2-claro-oscuro.html` (capturas `B2-claro-1440.png` y `B2-oscuro-1440.png`). Esto sustituye la recomendación de C. El concepto de la red (C) queda descartado; el selector de chips de B es la pieza del hero.

### Cómo funciona (verificado en el prototipo)
- **Tokens semánticos** (`--bg`, `--text`, `--muted`, `--line`, `--panel`, `--mark-*`) definidos para claro en `:root` y para oscuro en `:root[data-theme="dark"]`. Los componentes solo usan tokens, nunca HEX sueltos. Todo sale de los cinco valores oficiales (más opacidades de ellos); la superficie del panel oscuro (`#232948`) es marino mezclado con blanco, un derivado que habrá que dejar documentado.
- **Tema inicial:** sigue el sistema (`prefers-color-scheme`) y, si la persona elige, se guarda en `localStorage` (con `try/catch`). Un script de 6 líneas en `<head>` fija `data-theme` antes del primer pintado: probado, recargar en oscuro carga en oscuro sin destello. Es compatible con prerender porque el HTML estático no depende del tema.
- **Botón de tema:** 44×44 px, `aria-pressed` y `aria-label` que cambia ("Cambiar a modo oscuro/claro"), ícono sol/luna con transición de `transform` y `opacity`.
- **Cambio de tema:** revelado circular desde el botón con View Transitions API, solo si el navegador la soporta y no hay `prefers-reduced-motion`; si no, cambio inmediato. No pude comprobar visualmente el revelado a mitad de transición (solo el estado final).
- **El aqua en cada modo:** en claro es fondo de resaltado con texto marino (7.30:1); en oscuro es texto aqua sobre marino (7.30:1). Nunca texto aqua sobre blanco.
- **Logo:** ya existen `feba_completo.png` (claro) y `feba_completo_blanco.png` (oscuro): se intercambian por tema. No se toca el logo.

### Contraste medido (ratio WCAG, calculado en el navegador)
| Par | Claro | Oscuro |
|---|---|---|
| Texto principal / fondo | 16.24 | 16.24 |
| Texto secundario / fondo | 7.94 | 11.50 |
| Palabra resaltada | 7.30 (marino sobre aqua) | 7.30 (aqua sobre marino) |
| Etiqueta | 11.50 | 12.84 |
| Título del panel | 16.24 | 14.17 |
| Texto secundario del panel | 11.50 | 10.04 |
| Precio (aqua) en panel | 7.30 | 6.37 |
| Botón naranja (marino sobre naranja) | 5.15 | 5.15 |
Todos cumplen AA (≥ 4.5). Medido solo en el hero del prototipo; falta repetirlo en el resto de bloques.

### Costo y riesgos de soportar dos modos
- **Esfuerzo:** sube la implementación (S-M por bloque) y duplica la verificación: capturas, contraste, axe y Lighthouse en ambos modos.
- **Riesgo de calidad:** un modo mal pulido hace más daño que no tenerlo. Regla de aceptación: ningún bloque se da por terminado hasta verse bien y pasar AA en claro y oscuro.
- **Imágenes y SVG** propios deben usar `currentColor` o tokens para no romperse en un modo.
- **Open Graph y favicon** no cambian con el tema (el favicon puede usar `prefers-color-scheme` en SVG si se crea uno; por ahora se mantiene el actual).
- Por defecto: claro como estado por defecto cuando el sistema no indica preferencia.

### Pendiente en este prototipo
- Verificar a 375 px en ambos modos (no lo hice).
- Probar el cambio de tema con teclado y lector de pantalla.
- Revelado circular visto solo por código, no a mitad de animación.
