import React from 'react'
import Recommendation from '../Components/Lists/Recommendations'
import NewRelease from '../Components/Lists/NewReleases'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        backgroundColor: "#000",
        height: 1000
    },
})


function Home({ code }) {

    const classes = useStyle()

    return (
        <>
            <div className={classes.root}>
                <Recommendation code={code}></Recommendation>
                <NewRelease code={code}></NewRelease>
            </div>
        </>
    )
}

export default Home