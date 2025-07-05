import '../styles/Projetos.css'

interface ProjetoCardProps {
  titulo: string
  descricao: string
  link: string
}

export function ProjetoCard({ titulo, descricao, link }: ProjetoCardProps) {
  return (
    <div className="projeto-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="projeto-btn">Ver projeto</button>
      </a>
    </div>
  )
}
