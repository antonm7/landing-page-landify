import Header from './components/Header'
import Navbar from './components/Navbar'
import Story from './components/Story'
import './index.css'
import Process from './components/Process'
import Services from './components/Services'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState<boolean>(false)


  return (
    <div style={{position:'relative'}}>
      <Menu close={() => setMenu(false)} active={menu}/>
      <Navbar openMenu={() => setMenu(true)}/>
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
