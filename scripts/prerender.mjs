// Prerender: genera un HTML con contenido, título, descripción, canonical y
// JSON-LD para cada ruta, a partir de la plantilla que produce Vite.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { catalog } from "../src/config/catalogo.js"
import { pendingClaims, pendingFaq } from "../src/config/pendientes.js"

const root = process.cwd()
const dist = path.join(root, "dist")
const ssrDir = path.join(root, "dist-ssr")
const SITE = "https://www.febacode.com"

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8")
const ssrFile = fs.readdirSync(ssrDir).find((f) => /^entry-server.*\.js$/.test(f))
const { render, routes, notFoundRoute } = await import(pathToFileURL(path.join(ssrDir, ssrFile)).href)

// Precarga de la tipografía principal (subconjunto latino) para acortar el LCP
const manrope = fs.readdirSync(path.join(dist, "assets")).find((f) => /^manrope-latin-wght-normal-.*\.woff2$/.test(f))
const fontPreload = manrope ? `<link rel="preload" href="/assets/${manrope}" as="font" type="font/woff2" crossorigin />` : ""

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

const headFor = (route, urlPath, ld, isNotFound = false) => {
  const url = `${SITE}${urlPath === "/" ? "/" : urlPath}`
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    ...(isNotFound ? [] : [`<link rel="canonical" href="${url}" />`]),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_MX" />`,
    `<meta property="og:site_name" content="FebaCode" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="FebaCode: soluciones que conectan" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${SITE}/og-image.png" />`,
  ]
  for (const item of ld) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`)
  }
  return tags.join("\n    ")
}

const build = (url, route, isNotFound = false) => {
  const { html, jsonLd } = render(isNotFound ? "/no-encontrada" : url)
  const head = headFor(route, isNotFound ? "/" : url, jsonLd, isNotFound)
  const preload = fontPreload ? `
    ${fontPreload}` : ""
  const robots = isNotFound ? `\n    <meta name="robots" content="noindex" />` : ""
  return template.replace("<!--head-meta-->", head + robots + preload).replace("<!--app-html-->", html)
}

// Salvaguardas de contenido: el build falla si algo no aprobado llega al sitio,
// ya sea al HTML o al JavaScript público.
const formatter = new Intl.NumberFormat("es-MX")
const formatMXN = (n) => `$${formatter.format(n)}`
const bannedText = [
  ...pendingClaims.map((c) => c.text),
  ...pendingFaq.map((f) => f.q),
  "[CONFIRMAR]",
  "Casa Oliva",
  "UniiMarket",
  "BestPCDeals",
]
const publishedFrom = new Set(
  Object.values(catalog).flatMap((p) => p.tiers.filter((t) => t.published).map((t) => t.min)),
)
const hidden = Object.values(catalog).flatMap((p) => p.tiers.filter((t) => !t.published))
// Solo nombres distintivos: los de una palabra ("Empresarial") aparecen legítimamente en otros textos
const hiddenNames = hidden.map((t) => t.name).filter((n) => n.includes(" ") && n.length >= 14)
const hiddenAmounts = [
  ...new Set(hidden.flatMap((t) => [t.min, t.max, t.fromOnly]).filter((v) => v && !publishedFrom.has(v))),
]

const guardHtml = (file, content) => {
  const text = content.replace(/<script[\s\S]*?<\/script>/g, "")
  const hits = bannedText.filter((t) => text.includes(t))
  const prices = hiddenAmounts
    .map(formatMXN)
    .filter((p) => new RegExp(p.replace("$", "\$") + "(?![\d,])").test(text))
  if (hits.length || prices.length) {
    throw new Error(`Contenido no aprobado en ${file}: ${[...hits, ...prices].join(" | ")}`)
  }
}

const guardBundle = () => {
  const assets = path.join(dist, "assets")
  for (const f of fs.readdirSync(assets).filter((n) => n.endsWith(".js"))) {
    const code = fs.readFileSync(path.join(assets, f), "utf-8")
    const hits = [...bannedText, ...hiddenNames].filter((t) => code.includes(t))
    const nums = hiddenAmounts.filter((v) => {
      const short = v % 1000 === 0 ? `${v / 1000}e3` : String(v)
      return new RegExp(`(?<![\w.$])(${v}|${short})(?![\w.])`).test(code)
    })
    if (hits.length || nums.length) {
      throw new Error(`Contenido no aprobado en el JavaScript público (${f}): ${[...hits, ...nums].join(" | ")}`)
    }
  }
}

const write = (file, content) => {
  guardHtml(file, content)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content)
}

for (const route of routes) {
  const file = route.path === "/" ? path.join(dist, "index.html") : path.join(dist, route.path, "index.html")
  write(file, build(route.path, route))
  console.log("prerender", route.path)
}

// 404 real: Vercel sirve dist/404.html con estado 404 para rutas inexistentes
write(path.join(dist, "404.html"), build("*", notFoundRoute, true))
console.log("prerender 404.html")

// sitemap.xml a partir de las mismas rutas
const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((r) => `  <url>\n    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")
write(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log("sitemap.xml")

guardBundle()
console.log("guardas de contenido: HTML y JavaScript limpios")

fs.rmSync(ssrDir, { recursive: true, force: true })
