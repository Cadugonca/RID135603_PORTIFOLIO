import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Header.css'

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Carlos.dev</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#sobre">Sobre mim</a></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
