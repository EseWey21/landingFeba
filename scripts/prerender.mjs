// Prerender: genera un HTML con contenido, título, descripción, canonical y
// JSON-LD para cada ruta, a partir de la plantilla que produce Vite.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const root = process.cwd()
const dist = path.join(root, "dist")
const ssrDir = path.join(root, "dist-ssr")
const SITE = "https://www.febacode.com"

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8")
const ssrFile = fs.readdirSync(ssrDir).find((f) => /^entry-server.*\.js$/.test(f))
const { render, routes, notFoundRoute } = await import(pathToFileURL(path.join(ssrDir, ssrFile)).href)

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

const headFor = (route, urlPath, ld) => {
  const url = `${SITE}${urlPath === "/" ? "/" : urlPath}`
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
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
  const head = headFor(route, isNotFound ? "/" : url, jsonLd)
  const robots = isNotFound ? `\n    <meta name="robots" content="noindex" />` : ""
  return template.replace("<!--head-meta-->", head + robots).replace("<!--app-html-->", html)
}

const write = (file, content) => {
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

fs.rmSync(ssrDir, { recursive: true, force: true })
