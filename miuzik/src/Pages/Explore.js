import React from 'react'
import Container from '@material-ui/core/Container'
import BlockList from '../Components/BlockList/BlockList'
function Explore({ code }) {

    return (
        /*      This Page is For Explore Related Code           ! Note: before deletion discuss your approach once          */

        <>
            <Container fixed>
                {code}
                <BlockList code={code}></BlockList>
            </Container>

        </>
    )
}

export default Explore
