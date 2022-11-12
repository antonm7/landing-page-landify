import Header from './components/Header'
import Navbar from './components/Navbar'
import Story from './components/Story'
import './index.css'
import Process from './components/Process'
import Services from './components/Services'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  
  return (
    <div style={{overflowY:loading ? 'hidden' : 'unset'}}>
      {loading ? 
        <div style={{
          zIndex:999,
          position:'fixed',
          paddingTop:'5rem',
          width:'100vw',
          height:'100%',
          backgroundColor:'#F4EFDE',
        }}>
          <div className="loader">Loading...</div>
        </div>
        : null  
    }
      <div style={{opacity:loading ? 0 : 1,height:loading ? 0 : 'unset'}}>
         <Navbar />
         <Header loaded={() => setLoading(false)}/>
         <Process />
         <Story />
         <Services />
         <Questions />
         <Footer />
       </div>
    </div>
  )

  // return (
  //   <div>
  //     {loading ? <div>Loading..</div>
  //     : 
  //     <div>
  //       <Navbar />
  //       <Header loaded={() => setLoading(false)}/>
  //       <Process />
  //       <Story />
  //       <Services />
  //       <Questions />
  //       <Footer />
  //     </div>
  //     }
      
  //   </div>
  // )
}

export default App
