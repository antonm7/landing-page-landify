import styles from './Questions.module.css'
import serviceArrow from '/public/serviceArrow.svg'
import questionsTriangle from '/public/questionsTriangle.svg'
import rectangle from '/public/rectangle.svg'
import plus from '/public/plus.svg'
import mark from '/public/mark.svg'
import { useState } from 'react'



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
                    <img src={rectangle} id={styles.rectangle}/>
                    <h1 id={styles.title}>Frequently Asked Questions</h1>
                    <h2 id={styles.subTitle}>If you have any further questions please contsct us.</h2>
                </div>
                <div id={styles.container}>
                    <div className={styles.row}>
                        {one ? 
                        <div id={styles.open} onClick={() => setone(false)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={mark} id={styles.plus}/>
                            </div>
                            <div id={styles.openPara}>
        Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. 
                            </div>
                        </div> :  <div id={styles.question} onClick={() => setone(true)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={plus} id={styles.plus}/>
                            </div>
                        </div> 
                        }
                         {two ? 
                        <div id={styles.open} onClick={() => settwo(false)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={mark} id={styles.plus}/>
                            </div>
                            <div id={styles.openPara}>
        Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. 
                            </div>
                        </div> :  <div id={styles.question} onClick={() => settwo(true)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={plus} id={styles.plus}/>
                            </div>
                        </div> 
                        }

                    </div>
                    <div className={styles.row}>
                    {three ? 
                        <div id={styles.open} onClick={() => setthree(false)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={mark} id={styles.plus}/>
                            </div>
                            <div id={styles.openPara}>
        Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. 
                            </div>
                        </div> :  <div id={styles.question} onClick={() => setthree(true)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={plus} id={styles.plus}/>
                            </div>
                        </div> 
                        }
                         {four ? 
                        <div id={styles.open} onClick={() => setfour(false)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={mark} id={styles.plus}/>
                            </div>
                            <div id={styles.openPara}>
        Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. 
                            </div>
                        </div> :  <div id={styles.question} onClick={() => setfour(true)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={plus} id={styles.plus}/>
                            </div>
                        </div> 
                        }
                         {five ? 
                        <div id={styles.open} onClick={() => setfive(false)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={mark} id={styles.plus}/>
                            </div>
                            <div id={styles.openPara}>
        Landify is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts. 
                            </div>
                        </div> :  <div id={styles.question} onClick={() => setfive(true)}>
                            <div id={styles.flex}>
                                <p id={styles.questionTitle}>Will I get lifetime updates?</p>
                                <img src={plus} id={styles.plus}/>
                            </div>
                        </div> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}