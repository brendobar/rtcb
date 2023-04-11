import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from "./Footer"

export function Template() {

    const [headerHeight, setHeaderHeight] = useState(0)
    const [footerHeight, setFooterHeight] = useState(0)
    const header = useRef(null)
    const footer = useRef(null)

    useEffect(() => {
        setHeaderHeight(header.current.clientHeight)
        setFooterHeight(footer.current.clientHeight)
    }, []);

    return (
        <>
            <div className="header-wrapper" ref={header}><Header /></div>
            <div className="body-wrapper" style={{ minHeight: `calc(100vh - ${headerHeight + footerHeight}px` }}><Outlet /></div>
            <div className="footer-wrapper" ref={footer}><Footer /></div>

            <style>{`\
            *{\
                --headerHeight: ${headerHeight}px;  \
              }\
            `}
            </style>
        </>
    )
}

