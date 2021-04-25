import React from 'react'
import './TrackSearchResults.css'

export default function TrackSearchResults({ track }) {
    return (
        <div className="container" style={{ cursor: "pointer" }} onClick={handlePlay} >
            <img src={track.albumUrl} style={{height: "64px", width: "64px"}} />
            <div className="innerRight">
                <div className="title">{track.title}</div>
                <div className="artist" style={{color:"grey"}}>{track.artist}</div>
            </div>
        </div>
    )
}
