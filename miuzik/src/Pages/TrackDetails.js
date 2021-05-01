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


function Details({ code }) {

    const classes = useStyle()

    return (
        <>
            <div className={classes.root}>

            </div>
        </>
    )
}

export default Details