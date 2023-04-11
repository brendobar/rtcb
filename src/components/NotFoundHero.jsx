import React from 'react'
import { Link } from "react-router-dom";
import Socials from "./Socials";
import styles from './NotFoundHero.module.css'

export default function NotFound() {
    return (

        <div className={styles.notFound}>
            <div className='page-center py-120'>
                <div className={styles.notFound__container}>
                    <div className={styles.notFound__info}>
                        <h1 className={`${styles.notFound__title} mb-8`}>Ой, страница не найдена ;(</h1>
                        <p className={`${styles.notFound__subtitle} mb-16`}>Страница, которую вы ищете, могла быть удалена или никогда не существовала</p>
                        <Socials />
                        <Link to="/" className="not-found__back">Вернуться на главную</Link>
                    </div>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-3100442-2585658.png?f=webp" alt="not found image" />
                </div>
            </div>
        </div>
    )
}
