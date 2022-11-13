import styles from './Menu.module.css'
import logo from '/logo.svg'
import arrowDown from '/arrowDown.svg'
import mark from '/mark.svg'

interface Props {
    active:boolean
    close:() => void
}

export default function Menu({active,close}:Props) {
    
    return (
        <div id={styles.menu} className={active ? styles.open : ''}>
            <img src={mark} id={styles.mark} onClick={() => close()}/>
            <img src={logo}/>
            <div className={styles.link}>
                <p id={styles.p}>Product</p>
                <img src={arrowDown} />
            </div>
            <div className={styles.link}>
                <p id={styles.p}>Solutions</p>
                <img src={arrowDown}/>
            </div>
            <div className={styles.link}>
                <p id={styles.p}>Resources</p>
                <img src={arrowDown}/>
            </div>
            <div className={styles.link}>
                <p id={styles.p}>Pricing</p>
            </div>
        </div>
    )
}