import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

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
          {isDarkTheme ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
