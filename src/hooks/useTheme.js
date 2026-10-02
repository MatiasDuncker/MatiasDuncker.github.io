import { useEffect, useState } from 'react'

// Si el usuario ya eligió un tema antes, ese gana. Si no, el del sistema operativo.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage puede estar bloqueado (modo privado): seguimos con el del sistema.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme   // <html data-theme="dark">
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // aunque guardar falle, el tema funciona en la sesión actual
    }
  }, [theme])

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}