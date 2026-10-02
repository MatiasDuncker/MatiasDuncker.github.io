import { Link, NavLink } from 'react-router'
import { GITHUB_PROFILE_URL } from '../services/github.js'
import { useTheme } from '../hooks/useTheme.js'       // <-- new import

export default function Navbar() {
  const { theme, toggle } = useTheme()                // <-- bring the hook in
  const isDark = theme === 'dark'

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Principal">
        <Link to="/" className="brand">
          <span className="brand__kiwi" aria-hidden="true" />
          Stormx / Matias Duncker
        </Link>
        <ul className="navbar__links">
          <li>
            <NavLink to="/" end>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggle}
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDark ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}