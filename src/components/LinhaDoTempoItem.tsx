interface LinhaDoTempoItemProps {
  ano: string
  titulo: string
  descricao: string
}

export function LinhaDoTempoItem({ ano, titulo, descricao }: LinhaDoTempoItemProps) {
  return (
    <div className="linha-do-tempo-item">
      <span className="linha-do-tempo-ano">{ano}</span>
      <div className="linha-do-tempo-conteudo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  )
}
