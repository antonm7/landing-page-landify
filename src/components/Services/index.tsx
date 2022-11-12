import styles from './Services.module.css'
import arrowRight from '/public/arrowRight.svg'
import { useEffect, useState } from 'react'

export default function Services() {
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
        <div id={styles.services}>
            <div id={styles.header}>
                    <h1 id={styles.title}>Services we provide</h1>
                    <h4 id={styles.para}>We specialise in organising professional training courses.</h4>
            </div>
            {dimensions.width >= 1200 ? 
                <div id={styles.grid}>
                    <div className={styles.card} style={{backgroundColor:'#FFEFB6'}}>
                        <h2 className={styles.cardTitle}>Accounting and Analysis</h2>
                        <h3 className={styles.cardPara}>We’ve designed and built ecommerce experiences that have driven sales. </h3>
                        <button className={styles.cardButton} style={{marginTop:'0.25rem'}}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#B3E0C5',height:'109%'}}>
                        <h2 className={styles.cardTitle}>Finance and Banking</h2>
                        <h3 className={styles.cardPara}>The ability to independently value an enterprise is an essential tool for making business and strategic decisions.</h3>
                        <button className={styles.cardButton}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight} />
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#FFCBC2'}}>
                        <h2 className={styles.cardTitle}>Strategic Business Leader</h2>
                        <h3 className={styles.cardPara}>Strategic Business Leader is a training course from the Strategic Professional level.</h3>
                        <button className={styles.cardButton}  style={{marginTop:'0.25rem'}}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#FFCBC2'}}>
                        <h2 className={styles.cardTitle}>Preparatory Course</h2>
                        <h3 className={styles.cardPara}>The ability to independently value an enterprise is an essential tool for making business and strategic decisions.</h3>
                        <button className={styles.cardButton} >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{marginTop:'1.7rem',backgroundColor:'#FFEFB6'}}>
                        <h2 className={styles.cardTitle}>Business English Writing Skills</h2>
                        <h3 className={styles.cardPara}>A unique opportunity to gain guidance and feedback from our expert. </h3>
                        <button className={styles.cardButton} style={{marginBottom:'24px'}}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#B3E0C5'}}>
                        <h2 className={styles.cardTitle}>Strategic Business Reporting</h2>
                        <h3 className={styles.cardPara}>Strategic Business Reporting is a Professional level training course. It covers topics related to advanced financial reporting, including leasing.</h3>
                        <button className={styles.cardButton}  >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                </div> :
                    <div id={styles.grid}>
                    <div className={styles.card} style={{backgroundColor:'#FFEFB6'}}>
                        <h2 className={styles.cardTitle}>Accounting and Analysis</h2>
                        <h3 className={styles.cardPara}>We’ve designed and built ecommerce experiences that have driven sales. </h3>
                        <button className={styles.cardButton}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#B3E0C5'}}>
                        <h2 className={styles.cardTitle}>Finance and Banking</h2>
                        <h3 className={styles.cardPara}>The ability to independently value an enterprise is an essential tool for making business and strategic decisions.</h3>
                        <button className={styles.cardButton}>
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight} />
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#FFCBC2'}}>
                        <h2 className={styles.cardTitle}>Strategic Business Leader</h2>
                        <h3 className={styles.cardPara}>Strategic Business Leader is a training course from the Strategic Professional level.</h3>
                        <button className={styles.cardButton} >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#FFCBC2'}}>
                        <h2 className={styles.cardTitle}>Preparatory Course</h2>
                        <h3 className={styles.cardPara}>The ability to independently value an enterprise is an essential tool for making business and strategic decisions.</h3>
                        <button className={styles.cardButton} >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#FFEFB6'}}>
                        <h2 className={styles.cardTitle}>Business English Writing Skills</h2>
                        <h3 className={styles.cardPara}>A unique opportunity to gain guidance and feedback from our expert. </h3>
                        <button className={styles.cardButton} >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                    <div className={styles.card} style={{backgroundColor:'#B3E0C5'}}>
                        <h2 className={styles.cardTitle}>Strategic Business Reporting</h2>
                        <h3 className={styles.cardPara}>Strategic Business Reporting is a Professional level training course. It covers topics related to advanced financial reporting, including leasing.</h3>
                        <button className={styles.cardButton}  >
                            Get Started
                            <img src={arrowRight} id={styles.arrowRight}/>
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}