import styles from './Navbar.module.css'
import logo from '/public/logo.svg'
import arrowDown from '/public/arrowDown.svg'
import RoundedButton from '../common/RoundedButton'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
    }
        window.addEventListener('resize', handleResize)
      },[])
    return (
        <div id={styles.global}>
            <div id={styles.navbar}>
                <img src={logo}/>
                <div id={styles.container}>
                    <div id={styles.menu} className={styles.link}>
                            <p>Menu</p>
                        </div>
                    <div className={styles.link}>
                        <p>Product</p>
                        <img src={arrowDown}/>
                    </div>
                    <div className={styles.link}>
                        <p>Solutions</p>
                        <img src={arrowDown}/>
                    </div>
                    <div className={styles.link}>
                        <p>Resources</p>
                        <img src={arrowDown}/>
                    </div>
                    <div className={styles.link}>
                        <p>Pricing</p>
                    </div>
                    {dimensions.width > 500 ? <RoundedButton marginLeft='2rem' title={'Subscribe'} bg={'#1A1A1F'} color={'#ffff'} /> : null}
                    
                </div>
            </div>
        </div>
    )
}