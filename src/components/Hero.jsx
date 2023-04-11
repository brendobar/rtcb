import React from 'react'
import styles from './Hero.module.css'
import Socials from './Socials'

import TriDnyaDozhdya from '../assets/Tri-Dnya-Dozhdya.jpg'
import SlavaKPSS from '../assets/Slava-KPSS.jpg'
import BOOKER from '../assets/BOOKER.jpg'
import Najtivyhod from '../assets/Najtivyhod.jpg'
import Roki from '../assets/Roki.jpg'
import EgorNats from '../assets/Egor-Nats.jpg'
import GRYAZ from '../assets/GRYAZ.jpg'
import CMH from '../assets/CMH.jpg'
import ANTIHAJP from '../assets/ANTIHAJP.jpg'


export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className="page-center py-96" style={{zIndex: '2'}}>
                <div className={styles.hero__container}>
                    <p className='h2 mb-16'>Профессиональный фотограф</p>
                    <h1 className={`${styles.hero__title} mb-32`}>RTCB</h1>
                    <p className='body-l mb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corrupti cum similique, a dolore tempora, saepe eos earum nam debitis tempore eveniet nisi eum voluptatibus repudiandae fuga qui recusandae dolorum.</p>
                    <Socials color="#ffffff" />
                </div>
            </div>
            <ul className={styles.hero__slideshow}>
                <li><span data-num="0" style={{backgroundImage: `url(${TriDnyaDozhdya})`, animationDelay: "0s"}}></span></li>
                <li><span data-num="1" style={{backgroundImage: `url(${SlavaKPSS})`, animationDelay: "6s"}}></span></li>
                <li><span data-num="2" style={{backgroundImage: `url(${BOOKER})`, animationDelay: "12s"}}></span></li>
                <li><span data-num="3" style={{backgroundImage: `url(${Najtivyhod})`, animationDelay: "18s"}}></span></li>
                <li><span data-num="4" style={{backgroundImage: `url(${Roki})`, animationDelay: "24s"}}></span></li>
                <li><span data-num="5" style={{backgroundImage: `url(${EgorNats})`, animationDelay: "30s"}}></span></li>
                <li><span data-num="6" style={{backgroundImage: `url(${GRYAZ})`, animationDelay: "36s"}}></span></li>
                <li><span data-num="7" style={{backgroundImage: `url(${CMH})`, animationDelay: "42s"}}></span></li>
                <li><span data-num="8" style={{backgroundImage: `url(${ANTIHAJP})`, animationDelay: "48s"}}></span></li>
            </ul>
        </div>
    )
}
