import React from 'react'
import { makeStyles } from '@material-ui/core'
import Recent from '../Components/Lists/RecentlyPlay'


const useStyle = makeStyles({
    root: {
        backgroundColor: "#000",
        height: 1800
    },
})

function Library({ code, setTrack }) {
    const classes = useStyle()
    return (

        <div className={classes.root}>
            <Recent code={code} setTrack={setTrack}></Recent>
        </div>
    )
}

export default Library
