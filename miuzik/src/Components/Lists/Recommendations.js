import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import BlockList from '../BlockList/BlockList'

const spotifyApi = new SpotifyWebApi({
    clientId: 'process.env.REACT_APP_CLIENT_ID',
})

export default function Recommendations({ code }) {
    const accessToken = code.code.code;
    const [recommendation, setRecommendation] = useState([]);
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.getRecommendations({
            min_energy: 0.4,
            seed_artists: ['56SjZARoEvag3RoKWIb16j', '6eUKZXaKkcviH0Ku9w2n3V', '0du5cEVh5yTK9QJze8zA0C', '07YZf4WDAMNwqr4jfgOZ8y', '5yNuLEnJxpmw5oBODqLeqX'],
            min_popularity: 50
        }).then(data => {
            setRecommendation(data.body.tracks.map(track => {
                // console.log(track)
                return {
                    artist: track.album.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: track.album.images[1].url,
                }
            }))
        }).catch((err) => {
            console.log("Something went wrong!", err);
        });

    }, [accessToken])
    return (
        <div>
            <BlockList data={{ title: "Recommendation", tracks: recommendation, setTrack: code.code.setTrack }}></BlockList>
        </div >
    )
}