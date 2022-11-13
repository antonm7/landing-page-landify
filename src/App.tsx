import Header from './components/Header'
import Navbar from './components/Navbar'
import Story from './components/Story'
import './index.css'
import Process from './components/Process'
import Services from './components/Services'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Menu from './components/Menu'
import { useEffect, useState } from 'react'

function App() {
  const [menu, setMenu] = useState<boolean>(false)
  const [display,setDisplay] = useState<boolean>(false)

  useEffect(() => {
    if(menu) {
      setTimeout(() => {
        setDisplay(false)
      },200)
    } else {
      setDisplay(true)
    }
    
  },[menu])

  return (
    <div style={{position:'relative'}}>
      <Menu close={() => setMenu(false)} active={menu}/>
      <div style={{display:!display ? 'none' : 'block'}}>
        <Navbar openMenu={() => setMenu(true)}/>
        <Header />
        <Process />
        <Story />
        <Services />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

export default App
