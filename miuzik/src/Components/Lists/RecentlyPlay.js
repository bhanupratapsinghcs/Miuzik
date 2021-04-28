import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import BlockList from '../BlockList/BlockList'

const spotifyApi = new SpotifyWebApi({
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
})

export default function RecentlyPlay({ code }) {
    // console.log(code.setTrack)
    const accessToken = code.code;
    const [recent, setRecent] = useState([]);
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return;
        const temp = []
        spotifyApi.getMyRecentlyPlayedTracks()
            .then(data => {
                setRecent(data.body.items.map(track => {
                    if (temp.indexOf(track.track.uri) == -1) {
                        temp.push(track.track.uri)
                        return {
                            artist: track.track.artists[0].name,
                            title: track.track.name,
                            uri: track.track.uri,
                            albumUrl: track.track.album.images[1].url,
                        }
                    }

                }));
            })
            .catch(err => {
                console.log(err)
            })
    }, [accessToken])
    // console.log(recent)
    return (
        <div>
            <BlockList data={{ title: "Recently played", tracks: recent, setTrack: code.setTrack }}></BlockList>
        </div >
    )
}