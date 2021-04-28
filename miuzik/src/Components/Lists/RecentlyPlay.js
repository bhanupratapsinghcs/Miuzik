import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import BlockList from '../BlockList/BlockList'

const spotifyApi = new SpotifyWebApi({
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
})

export default function Recommendations({ code }) {
    // console.log(code.setTrack)
    const accessToken = code.code;
    const [recent, setRecent] = useState([]);
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return;
        console.log(accessToken)
        spotifyApi.getMyRecentlyPlayedTracks({
            limit: 5
        }).then(function (data) {
            // Output items
            console.log("Your 20 most recently played tracks are:");
            data.body.items.forEach(item => console.log(item.track));
        }, function (err) {
            console.log('Something went wrong!', err);
        });

    }, [accessToken])
    return (
        <div>
            <BlockList data={{ title: "Recently", tracks: recent, setTrack: code.setTrack }}></BlockList>
        </div >
    )
}