import '../styles/Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Carlos Eduardo. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="https://github.com/Cadugonca" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/cadugonca" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="carlos22santos03@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
      </div>
    </footer>
  )
}
