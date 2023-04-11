import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ParalaxLink.module.css'

export default function ParalaxLink(props) {
    return (
        <Link className={`${styles.paralaxLink} py-120`} to={props.to} style={{backgroundImage: `url(${props.background})`}}>{props.title}</Link>
    );
}

