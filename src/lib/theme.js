// El tema inicial lo fija un script en <head> antes del primer pintado (ver index.html).
export function currentTheme() {
  if (typeof document === "undefined") return "light"
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light"
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem("theme", theme)
  } catch {
    /* sin almacenamiento: el cambio sigue funcionando en esta visita */
  }
}

// Revelado circular desde el botón; si no hay View Transitions o se pidió menos
// movimiento, el cambio es inmediato.
export function toggleTheme(origin) {
  const next = currentTheme() === "dark" ? "light" : "dark"
  const root = document.documentElement
  if (origin) {
    root.style.setProperty("--vx", `${origin.x}px`)
    root.style.setProperty("--vy", `${origin.y}px`)
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (document.startViewTransition && !reduce) {
    document.startViewTransition(() => applyTheme(next))
  } else {
    applyTheme(next)
  }
  return next
}
