import { Projetos } from './pages/Projetos'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LinhaDoTempo } from './components/LInhaDoTempo'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projetos />
      <LinhaDoTempo />
    </>
  )
}

export default App