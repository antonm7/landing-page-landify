import styles from './Header.module.css'
import RoundedButton from '../common/RoundedButton'

import roundedArrow from '/public/roundedArrow.svg'
import girl from '/public/girl.svg'
import bring from '/public/bring.svg'
import play from '/public/play.svg'
import HeaderShape from './HeaderShape'
import { useEffect, useState } from 'react'


export default function Header() {
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

      if(dimensions.width <= 750) {
        return (
            <div id={styles.lowerWrapper}>
                <div id={styles.headersContainer}>
                    <h1 id={styles.h1}>
                        Academy <br />of Your Business
                    </h1>
                    <p id={styles.p}>Organizes work so teams know what to do, why it matters, and how to get it done.</p>
                    <div id={styles.buttonsWrapper}>
                        <RoundedButton color={'black'} bg={'#FFB3A7'} title={'Get Started'}/>
                        <div id={styles.demoWrapper}>
                            <div id={styles.circle}>
                                <img src={play} id={styles.play}/>
                            </div>
                            <h2 id={styles.playTitle}>View Demo</h2>
                        </div>
                    </div>
                    <img src={roundedArrow} id={styles.roundedArrow}/>
                </div>
                {dimensions.width > 560 ?
                    <div id={styles.bottomLower}>
                        <img src={girl} id={styles.girl}/>
                        <div id={styles.bring}>
                            <img id={styles.bringImage} src={bring}/>
                            <p id={styles.bringTitle}>Bring your ideas to life</p>
                        </div>
                        <div id={styles.market}>
                            <p id={styles.market_title}>40%</p>
                            <p id={styles.market_subTitle}>Market</p>
                        </div>
                        <div id={styles.sixK}>
                            <p id={styles.sixK_title}>6K</p>
                            <p id={styles.sixK_subTitle}>Clients</p>
                        </div>
                        <HeaderShape />
                    </div> :
                        <div id={styles.bottomWrapper} >
                            <div id={styles.bottomLower}>
                                <img src={girl} id={styles.girl}/>
                                <div id={styles.bring}>
                                    <img id={styles.bringImage} src={bring}/>
                                    <p id={styles.bringTitle}>Bring your ideas to life</p>
                                </div>
                                <div id={styles.market}>
                                    <p id={styles.market_title}>40%</p>
                                    <p id={styles.market_subTitle}>Market</p>
                                </div>
                                <div id={styles.sixK}>
                                    <p id={styles.sixK_title}>6K</p>
                                    <p id={styles.sixK_subTitle}>Clients</p>
                                </div>
                            </div>
                        </div>

            }
            </div>
        )
      }




    return (
        <div id={styles.wrapper}>
             <div id={styles.blackBg}>
                    </div>
            <div id={styles.header}>
                <div id={styles.headersContainer}>
                    <h1 id={styles.h1}>
                    Academy <br />
    of Your Business
                    </h1>
                    <p id={styles.p}>Organizes work so teams know what to do, why it matters, and how to get it done.</p>
                    <div id={styles.buttonsWrapper}>
                        <RoundedButton color={'black'} bg={'#FFB3A7'} title={'Get Started'}/>
                        <div id={styles.demoWrapper}>
                            <div id={styles.circle}>
                                <img src={play} id={styles.play}/>
                            </div>
                            <h2 id={styles.playTitle}>View Demo</h2>
                        </div>
                    </div>
                    <img src={roundedArrow} id={styles.roundedArrow}/>
                
                    </div>
                <div id={styles.imagesContainer}>
                    <div id={styles.sixK}>
                            <p id={styles.sixK_title}>6K</p>
                            <p id={styles.sixK_subTitle}>Clients</p>
                        </div>
                    <img src={girl} id={styles.girl}/>
                    <div id={styles.bring}>
                        <img id={styles.bringImage} src={bring}/>
                        <p id={styles.bringTitle}>Bring your ideas to life</p>
                    </div>
                    <div id={styles.market}>
                        <p id={styles.market_title}>40%</p>
                        <p id={styles.market_subTitle}>Market</p>
                    </div>
                    <HeaderShape />
                </div>
            </div>
        </div>
    )
}