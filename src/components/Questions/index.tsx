import styles from './Questions.module.css'
import serviceArrow from '/serviceArrow.svg'
import questionsTriangle from '/questionsTriangle.svg'
import { useState } from 'react'
import Line from './Line'



export default function Questions() {
    const [one, setone] = useState<boolean>(false)
    const [two, settwo] = useState<boolean>(false)
    const [three, setthree] = useState<boolean>(false)
    const [four, setfour] = useState<boolean>(false)
    const [five, setfive] = useState<boolean>(false)

    return (
        <div id={styles.global}>
            <div id={styles.questions}>
                <div id={styles.header}>
                    <img src={serviceArrow} id={styles.serviceArrow}/>
                    <img src={questionsTriangle} id={styles.questionsTriangle}/>
                    <h1 id={styles.title}>Frequently Asked Questions</h1>
                    <h2 id={styles.subTitle}>If you have any further questions please contsct us.</h2>
                </div>
                <div id={styles.container}>
                    <div className={styles.row}>
                        <Line title="Will I get lifetime updates?" para="Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. "/>
                        <Line para="Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. " title="Does Landify provide code kit as well?"/>
                    </div>
                    <div className={styles.row}>
                        <Line para="Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. " title="Can I use the Landify for a client’s product?"/>
                        <Line para="Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. " title="Do you have a free trial of Landify?"/>
                        <Line para="Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. " title="Who can use Landify?"/>
                    </div>
                </div>
            </div>
        </div>
    )
}