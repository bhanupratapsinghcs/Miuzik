import React from 'react'
import Container from '@material-ui/core/Container'
import Recommendation from '../Components/Lists/Recommendations'
function Explore({ accessToken }) {

    return (
        /*      This Page is For Explore Related Code           ! Note: before deletion discuss your approach once          */

        <>
            <Container fixed>
                <Recommendation code={accessToken}> </Recommendation>
            </Container>

        </>
    )
}

export default Explore
