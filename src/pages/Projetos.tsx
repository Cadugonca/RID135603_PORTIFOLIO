import { ProjetoCard } from '../components/ProjetoCard'
import './Projetos.css'
import reactLogo from '../assets/react.svg' // substitua depois pelas imagens dos seus projetos

export function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <ProjetoCard
          titulo="Barbearia Estilo Fino"
          descricao="Um projeto feito fora da escola para testes de habilidades em React."
          imagem={reactLogo}
          link="https://github.com/Cadugonca/estilofino"
        />
        <ProjetoCard
          titulo="Dashboard de vendas"
          descricao="Projeto com dnc envolvendo localstorage, login e gráficos."
          imagem={reactLogo}
          link="https://github.com/Cadugonca/sales-dashboard"
        />
        <ProjetoCard
          titulo="Task Manager"
          descricao="Gerenciador de tarefas com autenticação e persistência de dados."
          imagem={reactLogo}
          link="https://github.com/Cadugonca/RID-135603_TaskManager"
        />
        <ProjetoCard
          titulo="Arquitetura - Projeto Carlos"
          descricao="Desenvolvimento de um projeto fictício para fins de estudo."
          imagem={reactLogo}
          link="https://github.com/Cadugonca/dnc-arq-carlos"
        />
      </div>
    </section>
  )
}
