# Reporte final del rediseño de febacode.com

Estado al 15-oct-2026, con `main` en `56e6390`. Todo lo descrito está en producción (www.febacode.com) salvo lo marcado como pendiente.

## Qué se entregó
| Entrega | Commit en `main` | Contenido |
|---|---|---|
| Release A (hotfix) | `68208d4` | Contacto del footer corregido, menú móvil arreglado, enlaces legales muertos fuera, `vercel.json`, metadatos, íconos, `robots.txt`, `sitemap.xml`, contraste de botones, limpieza del repo y contenido ficticio fuera |
| Release B (rediseño) | `86230b4` | Home de 7 bloques, cuatro subpáginas de servicio, páginas legales, 404 real, modo claro y oscuro, menú móvil animado, prerender de todas las rutas con SEO por página, imagen Open Graph y salvaguardas de contenido en el build |
| Corrección del foco del menú | `fdc6e86` | La animación del menú había roto el foco; corregido |
| Revisión adversarial y mejoras | `70c26da` | Correcciones de la revisión; carga en modo claro; rutas que abren arriba y logo al inicio; hero con cuadrícula y selector en ventana de navegador estilo Safari; sección Proceso animada |
| Precios del catálogo 2026 | `56e6390` | Entradas "desde" nuevas y contenido de servicios alineado al catálogo |

## Línea base vs. resultado (www.febacode.com, Lighthouse)
| Métrica | Antes (15-oct) | Ahora |
|---|---|---|
| Rendimiento móvil | 86 | 96 |
| Accesibilidad móvil | 96 | 100 |
| Buenas prácticas móvil | 100 | 96 |
| SEO móvil | 91 | 100 |
| LCP móvil | 3.4 s | 2.2 s |
| TBT móvil | 30 ms | 120 ms |
| CLS móvil | 0.002 | 0.001 |
| Escritorio | no medido | 100 · 100 · 96 · 100 (LCP 0.4 s) |
| JS (sin gzip / gzip) | 378 KB / 121 KB | 277 KB / 88 KB |
| CSS (sin gzip) | 26 KB | 36 KB |
| Rutas indexables | 1 (HTML vacío) | 7 con contenido, título, descripción, canonical y JSON-LD |
| Rutas inexistentes | 404 de texto plano de Vercel | 404 real de marca con `noindex` |

Lectura honesta: el rendimiento móvil llegó a 98 justo tras el Release B y bajó a 95–96 después de agregar la cuadrícula del hero y las animaciones (el TBT subió de ~50 a ~120 ms). Sigue dentro de la meta (≥ 90) y el LCP cumple (≤ 2.5 s), pero es un costo medido de las animaciones. Es una sola corrida por medición, así que hay variación. Buenas prácticas queda en 96 por un aviso de CSP en modo solo reporte (ver pendientes).

## Verificación hecha (Chrome real contra producción, última pasada)
- 98 corridas (7 rutas × 7 anchos de 320 a 2560 px × claro y oscuro): sin recortes, sin desbordamiento horizontal, cero violaciones de axe, un solo `h1` por página, sin objetivos táctiles menores de 44 px y consola sin errores.
- Menú móvil: el foco entra al diálogo, hay trampa de foco, `Esc` cierra, el foco vuelve al botón y el scroll se restaura. Probado en 320×568, 375×667, 390×844, 430×932 y en horizontal.
- Tema: carga siempre en claro aunque el sistema esté en oscuro; la elección se recuerda y se aplica antes del primer pintado.
- Los enlaces del pie (Aviso de Privacidad, Términos) y los servicios abren arriba; el logo lleva al inicio desde cualquier lugar.
- Sección Proceso: la línea avanza en orden y cada paso se enciende al llegar a él; sin JavaScript o con movimiento reducido todo aparece completo.
- Sin JavaScript el contenido y el JSON-LD están en el HTML.

## Precios publicados (catálogo ajustado 2026)
| Pilar | Entrada "desde" publicada |
|---|---|
| Desarrollo Web | $3,599 |
| Sistemas Empresariales | $7,599 |
| Plataformas con IA | $6,799 |
| Soluciones para Negocios Locales | $4,399 (antes "Cotización personalizada") |

Fuente: `Catalogo_Paquetes_y_Precios_FebaCode_2026_Ajustado.docx`. No se publican los paquetes superiores, los rangos máximos, los add-ons ni las pólizas mensuales; viven en `src/config/catalogo.js`, que el sitio no importa. Detalle y decisiones en `04-precios.md`.

## Cómo activar cada cosa
- **Afirmaciones:** solo `sin-costos-ocultos` está publicada (`src/config/claims.js`). Las pendientes están en `src/config/pendientes.js`, que el sitio no importa: propiedad del código, sin licencias, tiempos de entrega, servidores propios, integraciones adicionales, "sin rentas por usuario", atención "24/7", garantía y "ventaja de 30% a 50%". Para publicar una, el dueño la confirma y se mueve a `claims.js`. La pregunta de FAQ "¿El sistema es mío…?" está en `pendientes.js` y se publica moviéndola a `src/config/faq.js` con su respuesta aprobada.
- **Precios:** el sitio solo importa `src/config/pricing.js`. Para publicar un nivel, se agrega su dato ahí y se marca `published: true` en `catalogo.js`.
- **Salvaguardas del build:** `npm run build` falla si una afirmación pendiente, un nombre de nivel oculto o un monto oculto llega al HTML o al JavaScript público; si cualquier monto en pesos del HTML no es una entrada "desde"; y si `pricing.js` no coincide con el catálogo. Se probó cada falla con pruebas negativas.

## Revisión adversarial y su resolución
Un revisor independiente encontró un bloqueante y varios hallazgos medios y bajos; los principales los verifiqué antes de actuar.
| Hallazgo | Resolución |
|---|---|
| H01 Crítico: dos plantillas de correo con nombres de terceros y textos sin respaldo estaban públicas en `/email/` | Movidas a `docs/correos/`; en producción dan 404 |
| H02 Medio: precios ocultos y afirmaciones pendientes viajaban en el JavaScript público | Datos separados (`catalogo.js`, `pendientes.js`) y guarda de build sobre el bundle |
| H03 Medio: "Dominio y hosting" y el consumo de WhatsApp/IA sin respaldo en el documento de precios | Con el catálogo 2026, "Costos aparte" sigue su apartado de transparencia: dominio y hosting, acompañamiento mensual opcional y consumo de WhatsApp/IA pagado al proveedor |
| H04 Medio: "Formulario de contacto integrado" junto a un aviso de que el sitio no tiene formularios | Reformulado a "Formulario para que tus clientes te contacten" |
| H05 Medio: textos legales con afirmaciones sin respaldo | Se retiran "no vendemos tus datos" y "sin identificarte" y se suaviza la titularidad; siguen pendientes de revisión legal |
| H06 Medio: `febacode.com` sin www no responde | Pendiente del dueño (configuración de dominio) |
| H07 Medio: promesas implícitas | Reescritas |
| Bajos | Canonical fuera de la 404, caché larga de assets, redirección de `/index.html`, meta descripciones, `Service.name`, lista de costos sin duplicados, README real y asset sin uso eliminado |

## Incidentes y lo que se aprendió
- **Foco del menú móvil:** mi cambio de animación del menú rompió el foco; lo detectó la verificación posterior a producción y se corrigió el mismo día.
- **Correos públicos en `/email/`:** los dejé en `public/` al decidir qué conservar; la revisión adversarial lo marcó.
- **"MXN" duplicado** en las páginas de servicio desde el Release B ("Desde $3,599 MXN MXN"); lo detecté en una captura y se corrigió con la actualización de precios.
- **Pruebas que no detectaban fallos:** la de desbordamiento no veía contenido recortado dentro de un contenedor con `overflow: hidden` (la columna del hero se cortaba en móvil), y la guarda de precios solo detectaba montos ocultos, no obsoletos. Ambas se reforzaron.
- **Entorno local:** un servidor de prueba mío bloqueó `node_modules` y mi `npm ci` falló justo antes de un push; el build de Vercel pasó, y luego reparé y verifiqué en local.

## Pendientes
- **Del dueño:** confirmar que el dominio se cobra aparte (el catálogo 2026 lo lista así; antes se había dicho que no); confirmar Negocios Locales con precio; decidir si se publica alguna afirmación pendiente; verificar que los alcances del catálogo reflejen la realidad del equipo (por ejemplo "hasta 50 productos", "3 flujos", "2 bodegas"); arreglar `febacode.com` sin www; enviar `sitemap.xml` a Google Search Console.
- **Revisión legal** del Aviso de Privacidad y los Términos (borradores sin razón social).
- **CSP** en modo solo reporte: el script de tema en `<head>` es inline, así que habría que añadir su hash antes de hacerla obligatoria. Lighthouse marca además un aviso de CSP con una URL `data:` que no identifiqué.
- **Validadores externos:** la imagen Open Graph con WhatsApp y los resultados enriquecidos de Google.
- **No hecho:** FAQ propia en cada subpágina, transiciones entre rutas, agente de IA (diferido).
- **Sin verificar:** que existan los perfiles de Facebook, Instagram y TikTok; Safari/iPhone real (solo se probó con Chrome; lo valida el dueño).
- **Archivos sin seguimiento a propósito:** `Catalogo_Paquetes_…_Ajustado.docx`, `Precios.docx` (obsoleto), el prompt del proyecto y la configuración de herramientas.

## Reversión
Instant Rollback en Vercel al despliegue anterior, o `git revert -m 1 <merge>`:
- Precios 2026: volver a `70c26da` (`git revert -m 1 56e6390`).
- Revisión adversarial y mejoras: volver a `fdc6e86` (`git revert -m 1 70c26da`).
- Release B: `git revert -m 1 86230b4`.
- Release A: volver a `ea3ee63`, el último despliegue anterior a todo el trabajo ("Rediseña la landing de Feba Code").
