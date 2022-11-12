import styles from './Navbar.module.css'
import logo from '/public/logo.svg'
import arrowDown from '/public/arrowDown.svg'
import RoundedButton from '../common/RoundedButton'

export default function Navbar() {
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
                    <RoundedButton marginLeft='2rem' title={'Subscribe'} bg={'#1A1A1F'} color={'#ffff'} />
                </div>
            </div>
        </div>
    )
}