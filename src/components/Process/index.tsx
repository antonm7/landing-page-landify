import styles from './Process.module.css'
import buisness from '/public/line/buisness.svg'
import Setting from '/public/line/Setting.svg'
import Chart from '/public/line/Chart.svg'
import Time from '/public/line/Time Circle.svg'



export default function Process() {
    return (
        <div id={styles.process}>
            <h1 id={styles.title}>The process we follow</h1>
            <p id={styles.para}>As a academy of business, we are going through the development cycle.</p>
            <div id={styles.lineWrapper}>
                <div id={styles.line}>
                    <div className={styles.box} style={{paddingTop:'3rem'}}>
                        <div style={{backgroundColor:'#B3E0C5'}} className={styles.circle}>
                            <img className={styles.image} src={buisness}/>
                        </div>
                        <h3 className={styles.boxTitle}>Buisness idea</h3>
                        <h4 className={styles.boxPara}>What you want your business to be. </h4>
                    </div>
                    <div className={styles.box} style={{paddingTop:'5.5rem'}}>
                        <div style={{backgroundColor:'#FFEFB6'}} className={styles.circle}>
                            <img className={styles.image} src={Time}/>
                        </div>
                        <h3 className={styles.boxTitle}>Planninga</h3>
                        <h4 className={styles.boxPara}>A buisness plan helps formalize your idea.</h4>
                    </div>
                    <div className={styles.box} style={{paddingTop:'3rem'}}>
                        <div style={{backgroundColor:'#FFCBC2'}} className={styles.circle}>
                            <img className={styles.image} src={Setting}/>
                        </div>
                        <h3 className={styles.boxTitle}>Develop</h3>
                        <h4 className={styles.boxPara}>Ideation, prototyping, costing of your product.</h4>
                    </div>
                    <div className={styles.box} style={{paddingTop:'5.5rem'}}>
                        <div style={{backgroundColor:'#E7E7E7'}} className={styles.circle}>
                            <img className={styles.image} src={Chart}/>
                        </div>
                        <h3 className={styles.boxTitle}>Business structure</h3>
                        <h4 className={styles.boxPara} style={{padding:'0 1rem'}}>Key parts of your business.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}