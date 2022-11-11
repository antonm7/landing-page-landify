import Header from './components/Header'
import Navbar from './components/Navbar'
import Story from './components/Story'
import './index.css'
import Process from './components/Process'
import Services from './components/Services'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Process />
      <Story />
    <Services />
    <Questions />
    <Footer />
    </div>
  )
}

export default App
