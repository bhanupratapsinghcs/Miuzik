import React from 'react'
import Container from '@material-ui/core/Container'
import Recommendation from '../Components/Lists/Recommendations'
import NewRelease from '../Components/Lists/NewReleases'

function Home({ code }) {
    return (

        <>
            <Container fixed>
                <Recommendation code={code}></Recommendation>
                <NewRelease code={code}></NewRelease>
            </Container>

        </>

    )
}

export default Home