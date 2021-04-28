import React from 'react'
import Recommendation from '../Components/Lists/Recommendations'
import NewRelease from '../Components/Lists/NewReleases'
import FeaturedPlaylist from '../Components/Lists/FeaturedPlaylist'
import Playlist from '../Components/Lists/Playlist'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        backgroundColor: "#000",
        height: 1800
    },
})


function Home({ code, setTrack }) {

    const classes = useStyle()
    // console.log(code)

    return (
        <>
            <div className={classes.root}>
                <Recommendation code={{ code: code, setTrack: { setTrack } }}></Recommendation>
                <NewRelease code={{ code: code, setTrack: { setTrack } }}></NewRelease>
                <FeaturedPlaylist code={{ code: code, setTrack: { setTrack } }}></FeaturedPlaylist>
                <Playlist code={{ code: code, setTrack: { setTrack } }}></Playlist>
            </div>
        </>
    )
}

export default Home