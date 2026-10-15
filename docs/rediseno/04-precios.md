# Análisis de precios (15-oct-2026)

Fuente de los precios de FebaCode: `Precios.docx` (raíz del repo). Coincide con el catálogo del prompt (§4.1) en todas las cifras. Autorización recibida: ajustarlos para ser competitivos.

## Evidencia de mercado (limitada)
Tres búsquedas rápidas. Casi todo viene de blogs de proveedores con interés comercial y sin fecha clara; úsalo como orientación, no como verdad.

| Servicio | Referencia encontrada | Fuente |
|---|---|---|
| Landing / página de una sección | $3,000 – $10,000 MXN con freelance; más de $10,000 con agencia (fecha de la tabla no indicada) | [GoDaddy México](https://www.godaddy.com/resources/latam/clientes/cuanto-cuesta-una-pagina-web-mexico) |
| Sitio corporativo pyme | $10,000 – $30,000 MXN | misma fuente |
| Sistemas internos a la medida | $80,000 – $400,000 MXN; un caso de distribuidora ~$180,000 en 5 meses | [Fencode](https://www.fencode.dev/blog/cuanto-cuesta-proyecto-software-mexico-2026) (proveedor de desarrollo a medida) |
| Chatbot de WhatsApp con IA | Sin cifras en MXN. El costo variable de IA generativa: USD 0.03 – 0.14 por interacción; WhatsApp Business Platform cobra por conversación | [Chattigo](https://blog.chattigo.com/cx-innovación-y-tendencia/cómo-ganar-dinero-con-los-chatbots-de-ia), [Aurora Inbox](https://www.aurorainbox.com/2025/05/17/cuanto-cuesta-chatbot-whatsapp-mexico/) |
| Competidor directo (CDMX) | Iterando: landing $15,000 · sitio $30,000 · tienda $45,000 (leído por un subagente, sin verificar la página) | iterando.mx |

## Comparación con el catálogo de FebaCode
| Paquete | FebaCode | Lectura |
|---|---|---|
| Web Esencial | $3,500 – $5,000 | Dentro del rango freelance y por debajo de agencia. Competitivo. |
| Web Profesional (5 secciones, panel, SEO) | $6,500 – $8,500 | Por debajo del rango de sitio corporativo ($10,000+). Muy económico; riesgo de subvaluar. |
| Web Empresarial | $13,000 – $18,000 | En rango bajo de sitio corporativo y por debajo de Iterando ($45,000 por tienda). |
| Sistemas (POS básico a Integral) | $7,000 – $45,000 | Muy por debajo del rango "a medida" ($80,000+), pero es un producto más acotado y de menos módulos. |
| IA | $7,000 – $60,000 | Sin referencia confiable. Falta costo variable (uso de IA y WhatsApp). |

## Recomendación (y por qué no cambio las cifras)
1. **Son ya competitivos y, en varios casos, bajos.** Subirlos o bajarlos a ciegas con esta evidencia sería adivinar. El posicionamiento "precio accesible" es el diferenciador declarado del negocio.
2. **Solo se publican las entradas "desde"** (decisión previa), así que el riesgo se limita a: Web desde $3,500, Sistemas desde $7,000, IA desde $7,000. La landing desde $3,500 está dentro del mercado; los dos de $7,000 hay que acompañarlos de un alcance claro para no prometer un sistema completo.
3. **Riesgo de subvaluar:** un precio demasiado bajo en sistemas e IA puede atraer clientes con alcance enorme y poco presupuesto, y puede hacer pensar que es algo "enlatado". Mitigación: describir el alcance exacto de cada "desde" (por ejemplo "POS básico, inventario simple, 1-2 usuarios") y usar "se afina con tu alcance".
4. **Los niveles superiores ($28,000 – $45,000 en sistemas, $35,000 – $60,000 en IA) no se publican todavía.** Cuando se publiquen, conviene revisarlos con 3 cotizaciones reales de competidores; probablemente haya margen para subir.
5. **Costos recurrentes no incluidos** (necesario para que "sin costos ocultos" sea cierto): dominio, hosting y respaldo, uso de WhatsApp Business y de la API de IA (se cobran por consumo a terceros), mantenimiento mensual. Se muestran como "No incluido" junto a los precios. Los montos concretos deben venir del equipo; no los invento.

## Sobre `Precios.docx`: observaciones
- Soporte: "1 mes" (Esencial) y "2 meses" (Profesional) coinciden con el catálogo; las páginas actuales del repo decían 3 y 12 meses y se corrigen.
- "Control Básico … incluye primer año de soporte básico" vs. Starter IA "primer mes de soporte": inconsistencia de generosidad entre pilares. Revisa si es intencional.
- Las tablas del docx traen un error de formato ("01-feb" en vez de "1-2 usuarios"; Excel lo interpretó como fecha).
- Los paquetes "Ultra/Elite" y "A la medida" ($50,000+ y $65,000+) quedan como cotización.

## Pendiente de tu parte
- Confirmar si las tres entradas "desde" están bien tal cual.
- Montos o criterio de cobro de lo recurrente (hosting, mantenimiento, consumo de WhatsApp/IA) si quieres publicarlos.
- Si quieres un análisis competitivo sólido, 3-5 URLs de competidores para leer sus páginas de precios directamente.

---

# Actualización: catálogo ajustado 2026 (15-oct-2026)

Fuente: `Catalogo_Paquetes_y_Precios_FebaCode_2026_Ajustado.docx` (fórmula "-20% - 1"). Reemplaza a `Precios.docx` en lo publicado.

## Entradas "desde" publicadas (primer paquete de cada pilar)
| Pilar | Antes | Ahora | Paquete que lo respalda |
|---|---|---|---|
| Desarrollo Web | $3,500 | **$3,599** | Esencial / Básico ($3,599 – $5,999) |
| Sistemas Empresariales | $7,000 | **$7,599** | Control Básico ($7,599 – $11,999) |
| Plataformas con IA | $7,000 | **$6,799** | Starter IA ($6,799 – $11,599) |
| Negocios Locales | Cotización personalizada | **$4,399** | Impulso Local Digital ($4,399 – $7,599) |

Negocios Locales ahora tiene precio en el catálogo, por lo que deja de ser "Cotización personalizada". Los precios salen de `src/config/pricing.js`; las frases del FAQ, las meta descripciones y la insignia del hero se generan desde ahí.

## Lo que NO se publica (decisión vigente: solo las entradas "desde")
- Rangos máximos y paquetes superiores de los cuatro pilares.
- Add-ons y pólizas con monto: acompañamiento mensual Web ($639 – $1,759/mes), CFDI 4.0 (+$9,599 – $14,399), migración de datos (+$3,999 – $11,999), póliza de sistema ($1,439 – $3,599/mes) y póliza de scraping/IA ($1,999 – $4,799/mes).
Todo está en `src/config/catalogo.js`, que el sitio no importa. El build falla si algún monto que no sea una entrada "desde" aparece en el HTML, y falla también si `pricing.js` no coincide con el catálogo.

## Cambios de contenido derivados del documento
- Las páginas de servicio describen lo que incluye el primer paquete de cada pilar según el catálogo 2026 (alcance, usuarios, soporte inicial de 1 mes) y resumen los paquetes siguientes sin precio.
- "Costos aparte" sigue el apartado de transparencia del documento: **dominio y hosting** (a nombre del cliente o dentro del acompañamiento mensual), acompañamiento mensual opcional tras el soporte inicial, y consumo de WhatsApp Business y APIs de IA (se paga directo al proveedor).
- Integraciones: se agregan Instagram y Google Maps (aparecen en el documento).

## Puntos que el documento contradice o deja sin confirmar
1. **Dominio:** antes se indicó que el dominio no se cobraría; el documento lo lista como costo aparte ("Dominio anual", bajo cotización; "Dominio y Hosting se contrata a nombre del cliente"). Se publicó según el documento. Confirmar.
2. **Afirmaciones del documento sin aprobación para el sitio** (no se publican; quedan en `src/config/pendientes.js` y el build las bloquea): "Propiedad de tu solución… sin rentas forzosas por cada usuario", atención "24/7", "garantía" de 1 a 3 meses, "ventaja de 30% a 50% frente a agencias". El soporte inicial se publica como "soporte técnico por 1 mes", sin la palabra "garantía".
3. La sección "Justificación Estratégica (Uso Interno)" del documento es interna y no se publica.
4. Hay detalles del documento que no se verificaron contra la realidad del equipo (por ejemplo, "hasta 50 productos", "3 flujos" o "2 bodegas"); se muestran tal cual.
