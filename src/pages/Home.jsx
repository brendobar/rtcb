import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ParalaxLink from '../components/ParalaxLink'


import TriDnyaDozhdya from '../assets/Tri-Dnya-Dozhdya.jpg'
import SlavaKPSS from '../assets/Slava-KPSS.jpg'
import BOOKER from '../assets/BOOKER.jpg'
import Najtivyhod from '../assets/Najtivyhod.jpg'
import Roki from '../assets/Roki.jpg'
import EgorNats from '../assets/Egor-Nats.jpg'
import GRYAZ from '../assets/GRYAZ.jpg'
import CMH from '../assets/CMH.jpg'
import ANTIHAJP from '../assets/ANTIHAJP.jpg'

export default function Home() {




  return (
    <>
      <Hero />      
      <ParalaxLink to="/photos?groupId=-213150995&album=292033362" title="Три Дня Дождя" background={TriDnyaDozhdya}/>
      <ParalaxLink to="/photos?groupId=-213150995&album=291117304" title="Слава КПСС\Замай" background={SlavaKPSS} />
      <ParalaxLink to="/photos?groupId=-213150995&album=290642141" title="BOOKER" background={BOOKER} />
      <ParalaxLink to="/photos?groupId=-213150995&album=290060113" title="Найтивыход" background={Najtivyhod} />
      <ParalaxLink to="/photos?groupId=-213150995&album=286898205" title="Роки" background={Roki} />
      <ParalaxLink to="/photos?groupId=-213150995&album=286898741" title="Егор Натс" background={EgorNats} />
      <ParalaxLink to="/photos?groupId=-213150995&album=287438408" title="ГРЯЗЬ" background={GRYAZ} />
      <ParalaxLink to="/photos?groupId=-213150995&album=284212084" title="CMH" background={CMH} />
      <ParalaxLink to="/photos?groupId=-213150995&album=283926015" title="АНТИХАЙП" background={ANTIHAJP} />
    </>
  )
}
