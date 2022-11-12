import { useState } from 'react'
import styles from './Line.module.css'
import mark from '/public/mark.svg'
import plus from '/public/plus.svg'

interface Props {
    title:string
    para:string
}

export default function Line({title, para}:Props) {
    const [open, setOpen] = useState<boolean>(false)

    
    
        return (
            <div className={styles.question} style={{maxHeight:open ? 'auto' : '',borderColor:'#DCB0FE'}} onClick={() => setOpen(!open)}>
                <div id={styles.flex}>
                    <p id={styles.questionTitle}>{title}</p>
                    <img src={mark} id={styles.plus}/>
                </div>
                <div id={styles.openPara} style={{maxHeight:open ? '25rem' : ''}}>
                    {para}
                </div>
            </div> 
         )
}