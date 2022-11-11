import { useState, useEffect } from 'react'
import RoundedButton from '../common/RoundedButton'
import styles from './Footer.module.css'
import whiteLogo from '/public/whiteLogo.svg'

export default function Footer() {
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


 
        if(dimensions.width <= 850) {
                return (
                    <div id={styles.footer}>
                        <div id={styles.main}>
                            <div className={styles.row}>
                                <img src={whiteLogo} id={styles.whiteLogo}/>
                                    <div  style={{display:'flex',width:'100%',justifyContent:'space-between',paddingTop:'2rem'}}>
                                        <div>
                                            <h3 className={styles.title}>Menu</h3>
                                            <p className={styles.colLinks}>Services</p>
                                            <p className={styles.colLinks}>Works</p>
                                            <p className={styles.colLinks}>About</p>
                                            <p className={styles.colLinks}>Contact</p>
                                        </div>
                                        <div style={{paddingLeft:'2rem'}}>
                                            <h3 className={styles.title}>Connect</h3>
                                            <p className={styles.colLinks}>Linkedin</p>
                                            <p className={styles.colLinks}>Facebook</p>
                                            <p className={styles.colLinks}>Twitter</p>
                                            <p className={styles.colLinks}>Instagram</p>
                                        </div>
                                        <div >
                                            <h3 className={styles.title}>Subscribe tp our newsletter!</h3>
                                            <div className={styles.row} id={styles.specialRow}>
                                                <input placeholder='Your Email' id={styles.input}/>
                                                <RoundedButton height='2.8rem' title='Subscribe' marginLeft={dimensions.width <= 1200 ? '0' : '0.6rem'} bg='#FFB3A7' color='#1A1A1F'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div id={styles.bottom}>
                                    <p id={styles.rights} style={{paddingLeft:'2rem'}}>
                                        <span style={{color:'white'}}>2020 Landify</span>. All rights reserved
                                    </p>
                                    <div id={styles.bootomLinks} style={{paddingRight:'2rem'}}>
                                        <p id={styles.bottomLink}>Privacy Policy</p>
                                        <p id={styles.bottomLink} style={{padding:'0 1.5rem'}}>Terms & Conditions</p>
                                        <p id={styles.bottomLink}>Code of conduct</p>
                                    </div>
                                </div>
                        </div>
                )
        } else {
            return (
                <div id={styles.footer}>
                    <div id={styles.main}>
                        <div className={styles.row}>
                            <img src={whiteLogo} id={styles.whiteLogo}/>
                            <div style={{paddingLeft:'3.3rem'}}>
                                <h3 className={styles.title}>Menu</h3>
                                <p className={styles.colLinks}>Services</p>
                                <p className={styles.colLinks}>Works</p>
                                <p className={styles.colLinks}>About</p>
                                <p className={styles.colLinks}>Contact</p>
                            </div>
                            <div style={{paddingLeft:'8.3rem'}}>
                                <h3 className={styles.title}>Connect</h3>
                                <p className={styles.colLinks}>Linkedin</p>
                                <p className={styles.colLinks}>Facebook</p>
                                <p className={styles.colLinks}>Twitter</p>
                                <p className={styles.colLinks}>Instagram</p>
                            </div>
                            <div style={{paddingLeft:'6.25rem'}}>
                                <h3 className={styles.title}>Subscribe tp our newsletter!</h3>
                                <div className={styles.row} id={styles.specialRow}>
                                    <input placeholder='Your Email' id={styles.input}/>
                                    <RoundedButton height='2.8rem' title='Subscribe' marginLeft={dimensions.width <= 1200 ? '0' : '0.6rem'} bg='#FFB3A7' color='#1A1A1F'/>
                                </div>
                            </div>
                        </div>
                            <div id={styles.bottom}>
                                <p id={styles.rights}>
                                    <span style={{color:'white'}}>2020 Landify</span>. All rights reserved
                                </p>
                                <div id={styles.bootomLinks}>
                                    <p id={styles.bottomLink}>Privacy Policy</p>
                                    <p id={styles.bottomLink} style={{padding:'0 1.5rem'}}>Terms & Conditions</p>
                                    <p id={styles.bottomLink}>Code of conduct</p>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }

}