import React from 'react'
import Button from '@material-ui/core/Button'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=0adaf2a4ad6248869d5b1acf78494f58&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-read-recently-played"

export default function Login() {
    console.log("login")
    return (
        <div>
            <Button href={AUTH_URL} variant="contained">Login
            </Button>
        </div>
    )
}
