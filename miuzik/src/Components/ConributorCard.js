import React from 'react'
import './ContributorCard.css'
import * as Icons from '@material-ui/icons'

function ConributorCard({ userName, github, img, name }) {
    return (
        <div className="cardContainer">
            <div className="circle"><img src={img} /></div>
            <h3>{name}</h3>
            <a href={github} target="_blank"><Icons.GitHub /><strong>Github: {userName}</strong></a>            
        </div>
    )
}

export default ConributorCard
