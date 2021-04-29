import React from 'react'
import Container from '@material-ui/core/Container'
import NewRelease from '../Components/Lists/NewReleases'
import Recommendation from '../Components/Lists/Recommendations'
import FeaturedPlaylist from '../Components/Lists/FeaturedPlaylist'
import Playlist from '../Components/Lists/Playlist'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        backgroundColor: "#000",
        height: 1800
    },
})

function Explore({ code, setTrack }) {
    const classes = useStyle()

    return (
        <>
            <div className={classes.root}>
                <FeaturedPlaylist code={{ code: code, setTrack: { setTrack } }}></FeaturedPlaylist>
                <Playlist code={{ code: code, setTrack: { setTrack } }}></Playlist>
                <NewRelease code={{ code: code, setTrack: { setTrack } }}></NewRelease>
                <Recommendation code={{ code: code, setTrack: { setTrack } }}> </Recommendation>
            </div>

        </>
    )
}

export default Explore
