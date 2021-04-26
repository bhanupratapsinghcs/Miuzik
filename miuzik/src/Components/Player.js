import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackResults }) {
    const [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [trackResults])

    if (!accessToken) return null
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackResults ? [trackResults] : []}
            styles={{
                activeColor: '#fff',
                sliderHandleColor: '#ff0000',
                bgColor: '#000',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#ff0000',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
            }}
        />
    )
}
