import React from 'react'
import Button from '@material-ui/core/Button'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=" + process.env.REACT_APP_CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-read-recently-played"

export default function Login() {
    return (
        <div>
            <Button href={AUTH_URL} variant="contained">Login
            </Button>
        </div>
    )
}
