import styles from './RoundedButton.module.css'

interface Props {
    title:string
    bg:string
    color:string
    marginLeft?:string
    marginRight?:string
}

export default function RoundedButton({bg,title, marginLeft, marginRight, color}:Props) {
    return (
        <button id={styles.button} style={{
            backgroundColor:bg,
            marginLeft:marginLeft ? marginLeft : 0,
            marginRight:marginRight ? marginRight : 0

        }} onClick={() => null}>
                        <span id={styles.span} style={{color}}>{title}</span>
                    </button>
    )
}