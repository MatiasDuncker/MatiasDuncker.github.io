import { Link } from 'react-router'
import { GITHUB_AVATAR_URL, GITHUB_PROFILE_URL } from '../services/github.js'

const SKILLS = ['React', 'JavaScript', 'Vite', 'React Router', 'Vitest', 'Playwright', 'Java', 'Git']

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__avatar" src={GITHUB_AVATAR_URL} alt="Avatar de MatiasDuncker" width="160" height="160" />
        <div>
          <p className="eyebrow">Desarrollo Fullstack · DSY1104</p>
          <h1>
            Hola, soy <span className="highlight">MatiasDuncker</span> 🐈
          </h1>
          <p className="lead">
           Me defino como una persona que no se rinde facil, alegre y la verdad un poco ansioso pero estoy trabajando en eso, soy estudiante de la carrera de ingenieria en informatica en el DUOC UC de San Joaquin,
            mis gustos son los videojuegos, el anime y escuchar musica.
          </p>
          <div className="actions">
            <Link to="/portafolio" className="btn btn--primary">Ver portafolio</Link>
            <a href={GITHUB_PROFILE_URL} className="btn btn--ghost" target="_blank" rel="noreferrer">
              github.com/MatiasDuncker ↗
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>Tecnologías de este sitio</h2>
        <ul className="chips">
          {SKILLS.map((skill) => (
            <li key={skill} className="tag">{skill}</li>
          ))}
        </ul>
      </section>
    </>
  )
}