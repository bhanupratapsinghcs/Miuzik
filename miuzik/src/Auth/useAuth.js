// custom hook
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    // console.log(code)
    useEffect(() => {

        // calling server for login data

        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {


            // set data

            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)


            // to remove acccess token from search bar

            window.history.pushState({}, null, '/')
        }).catch((err) => {

            // to redirect user to login page when token  expires
            console.log(err)

            window.location = '/'
        })
    }, [code])

    useEffect(() => {
        // for refresh token when generated then pass to server only not before 

        if (!refreshToken || !expiresIn) return;


        // time interval to change access token after every session expire for automatical token generation

        const interval = setInterval(() => {
            // after refresh token generted

            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            }).then(res => {


                // set data

                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)

            }).catch(() => {

                // to redirect user to login page when token  expires

                window.history.pushState({}, null, '/')
            })

        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken
}
