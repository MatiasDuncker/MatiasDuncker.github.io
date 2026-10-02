import { GITHUB_PROFILE_URL } from '../services/github.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
         <small>&copy; MatiasDuncker, Todos Los Derechos Reservados</small> ·{' '}
          <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
            github.com/MatiasDuncker
          </a>{' '}
        </p>
      </div>
    </footer>
  )
}