import React from 'react'
import Container from '@material-ui/core/Container'
import BlockList from '../Components/BlockList/BlockList'


function Home({ code }) {
    return (

        /*      This page is For Home related Code.     ! Note: before deletion discuss your approach once      */
        <>
            <Container fixed>
                <BlockList code={code}></BlockList>
            </Container>

        </>

    )
}

export default Home