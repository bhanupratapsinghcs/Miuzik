import React from 'react'
import './TrackSearchResults.css'

export default function TrackSearchResults({ track, setTrack }) {
    const habdleClick = (res) => {
        setTrack(res)
    }
    return (
        <div className="container" style={{ cursor: "pointer" }} onClick={() => { habdleClick(track.uri) }}>
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="innerRight">
                <div className="title">{track.title}</div>
                <div className="artist" style={{ color: "grey" }}>{track.artist}</div>
            </div>
        </div>
    )
}
