import pinkSquare from '/public/shapedHeader/pinkSquare.svg'
import triangle from '/public/shapedHeader/triangle.svg'
import vector from '/public/shapedHeader/vector.svg'

import styles from './Header.module.css'

export default function HeaderShape() {
    return (
        <div id={styles.shape}>
            <img src={pinkSquare} id={styles.square}/>
            <img src={triangle} id={styles.triangle}/>
            <img src={vector} id={styles.vector}/>
        </div>
    )
}