import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {

    const [openBurger, setOpenBurger] = useState(false);


    const toggleBurger = () => {
        setOpenBurger(current => !current);
        document.querySelector('body').classList.toggle('block-scroll');
    };


    return (
        <header className={styles.header}>
            <div className='page-center'>
                <div className={styles.header__container}>
                    <Link className={styles.header__logo} to="/">RTCB</Link>
                    <nav className={styles.header__nav}>
                        <Link className='body-l' to="/">Главная</Link>
                        <Link className='body-l' to="/contacts">Контакты</Link>
                    </nav>
                    <div className={`${styles.header__burgerBTN} ${openBurger && styles.open}`} onClick={toggleBurger}>

                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <nav className={`${styles.header__navMob} ${openBurger && styles.open}`}>
                <Link className='body-l' to="/" onClick={toggleBurger}>Главная</Link>
                <Link className='body-l' to="/contacts" onClick={toggleBurger}>Контакты</Link>
            </nav>
        </header>
    )
}


