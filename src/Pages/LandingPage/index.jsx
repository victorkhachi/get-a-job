import React, { useState } from 'react'
import './index.scss'

import Top from './COmponents/Top'
import Row2 from './COmponents/Row2'
import Hiw from './COmponents/HIW'
import Categories from './COmponents/Categories'
import Row4 from './COmponents/Row4'
import Row5 from './COmponents/Row5'
import GetStarted from './COmponents/GetStarted'
import Footer from './COmponents/Footer'
export default function Landing(){

    return(
        <div class='body'>
            <Top />
            <Row2 />
            <Hiw/>
            <Categories />
            <Row4 />
            <Row5 />
            <GetStarted />
            <Footer />
        </div>
    )
}