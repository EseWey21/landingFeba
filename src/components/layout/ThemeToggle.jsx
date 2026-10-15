import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { currentTheme, toggleTheme } from "../../lib/theme"

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")

  // El tema real ya lo fijó el script de <head>; aquí solo se sincroniza el botón.
  useEffect(() => {
    setTheme(currentTheme())
  }, [])

  const dark = theme === "dark"
  const onClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTheme(toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }))
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onClick}
      aria-pressed={dark}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {dark ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle
