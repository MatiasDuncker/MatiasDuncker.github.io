import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p className="lead">Esta pagina no existe</p>
      <Link to="/" className="btn btn--primary">Volver al inicio</Link>
    </section>
  )
}