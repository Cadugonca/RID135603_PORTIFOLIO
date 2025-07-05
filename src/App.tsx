import { Projetos } from './pages/Projetos'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LinhaDoTempo } from './components/LinhaDoTempo'
import { Footer } from './components/Footer'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projetos />
     <LinhaDoTempo />
     <Footer />
    </>
  )
}

export default App