import styles from './Story.module.css'

import shape from '/public/storyShape.svg'
import storyTriangle from '/public/storyTriangle.svg'
import bg from '/public/storyBg.svg'
import storyGirl from '/public/storyGirl.svg'
import storyArrow from '/public/storyArrow.svg'
import RoundedButton from '../common/RoundedButton'


export default function Story() {
    return (
        <div id={styles.story}>
                <img src={shape} id={styles.shape}/>
            <div id={styles.container}>
                <img src={bg} id={styles.bg} />
                <img src={storyGirl} id={styles.storyGirl}/>
                <div id={styles.content}>
                    <h1 id={styles.title}>Our Story</h1>
                    <p id={styles.para}>We specialise in organising professional training courses and we have been doing it in Poland since 1994. As a academy of business, we are going through the development cycle.</p>
                    <RoundedButton title='Get Started' bg='#FFB3A7' color='#1A1A1F'/>
                </div>
                <img src={storyTriangle} id={styles.triangle}/>
                <img src={storyArrow} id={styles.arrow}/>

            </div>
        </div>
    )
}