import React, { useState } from 'react'
import './index.scss'

import Top from './COmponents/Top'
import Row2 from './COmponents/Row2'
import Hiw from './COmponents/HIW'
export default function Landing(){

    return(
        <div class='body'>
            <Top />
            <Row2 />
            <Hiw/>
        </div>
    )
}