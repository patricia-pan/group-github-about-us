import React from 'react'
import AboutEachPerson from './components/pages/AboutEachPerson'
import { BrowserRouter as Router } from 'react-router-dom'

function AboutUs(props) {
    return(
        <div>
            <h1>Sanity Check</h1>
            <AboutEachPerson team={props.team} />
        </div>
    )
}

export default AboutUs