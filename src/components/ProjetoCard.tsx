import './ProjetoCard.css'

interface ProjetoCardProps {
  titulo: string
  descricao: string
  imagem: string
  link: string
}

export function ProjetoCard({ titulo, descricao, imagem, link }: ProjetoCardProps) {
  return (
    <div className="projeto-card">
      <img src={imagem} alt={`Imagem do projeto ${titulo}`} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="projeto-btn">Ver projeto</button>
      </a>
    </div>
  )
}
