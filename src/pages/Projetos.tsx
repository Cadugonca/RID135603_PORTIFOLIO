import { ProjetoCard } from '../components/ProjetoCard'
import './Projetos.css'
import reactLogo from '../assets/react.svg' // substitua depois pelas imagens dos seus projetos

export function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <ProjetoCard
          titulo="PROJETO 1"
          descricao="Um projeto incrível feito com React."
          imagem={reactLogo}
          link="https://github.com/seuusuario/projeto1"
        />
        <ProjetoCard
          titulo="PROJETO 2"
          descricao="Um sistema moderno para gestão de tarefas."
          imagem={reactLogo}
          link="https://github.com/seuusuario/projeto2"
        />
        <ProjetoCard
          titulo="PROJETO 3"
          descricao="Landing page responsiva com animações."
          imagem={reactLogo}
          link="https://github.com/seuusuario/projeto3"
        />
        <ProjetoCard
          titulo="PROJETO 4"
          descricao="Dashboard com gráficos e autenticação."
          imagem={reactLogo}
          link="https://github.com/seuusuario/projeto4"
        />
      </div>
    </section>
  )
}
