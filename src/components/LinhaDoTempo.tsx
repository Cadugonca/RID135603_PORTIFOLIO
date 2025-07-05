import '../styles/Sobre.css'
import { LinhaDoTempoItem } from './LinhaDoTempoItem'

export function LinhaDoTempo() {
  return (
    <section className="sobre" id="sobre">
      <h2>Sobre mim</h2>
      <div className="linha-do-tempo">
        <LinhaDoTempoItem
          ano="2022"
          titulo="Início nos estudos"
          descricao="Comecei a estudar lógica de programação e fundamentos da web."
        />
        <LinhaDoTempoItem
          ano="2023"
          titulo="Primeiros projetos"
          descricao="Criei meus primeiros projetos com HTML, CSS, JS e depois migrei para React."
        />
        <LinhaDoTempoItem
          ano="2024"
          titulo="Freelas e projetos reais"
          descricao="Comecei a pegar freelas e participar de desafios de portfólio como este."
        />
        <LinhaDoTempoItem
          ano="2025"
          titulo="Em busca de oportunidades"
          descricao="Estou construindo meu portfólio para atuar profissionalmente como dev."
        />
      </div>
    </section>
  )
}
