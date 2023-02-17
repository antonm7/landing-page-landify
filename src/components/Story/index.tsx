import styles from './Story.module.css'
import shape from '/storyShape.svg'
import storyTriangle from '/storyTriangle.svg'
import bg from '/storyBg.svg'
import s from '/s.png'
import storyArrow from '/storyArrow.svg'
import RoundedButton from '../common/RoundedButton'
import { useState, useEffect } from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export default function Story() {
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


    if(dimensions.width <= 750) {
        return (
            <div id={styles.smallStory}>
                <img src={shape} id={styles.smallShape}/>
                <LazyLoadImage alt='story girl' src={s} id={styles.smallStoryGirl}/>
                <div id={styles.smallContent}>
                    <div id={styles.smallWrapper}>
                        <h1 id={styles.title}>Our Story</h1>
                        <p id={styles.para}>We specialise in organising professional training courses and we have been doing it in Poland since 1994. As a academy of business, we are going through the development cycle.</p>
                        <RoundedButton title='Get Started' bg='#FFB3A7' color='#1A1A1F'/>
                    </div>
                    <img src={storyTriangle} id={styles.triangle}/>
                </div>
            </div>
        )
    }

    return (
        <div id={styles.story}>
                <img src={shape} id={styles.shape}/>
            <div id={styles.container}>
                <img src={bg} id={styles.bg} />
                <LazyLoadImage alt='story girl' src={s} id={styles.storyGirl}/>
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