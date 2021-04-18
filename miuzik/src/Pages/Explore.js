import React from 'react'
const code = new URLSearchParams(window.location.search).get('code');
function Explore() {
    console.log("hhg")
    console.log(code)
    return (
        /*      This Page is For Explore Related Code           ! Note: before deletion discuss your approach once          */

        <div>
            <h3 style={{ color: 'white' }}>Explore</h3>
        </div>
    )
}

export default Explore
