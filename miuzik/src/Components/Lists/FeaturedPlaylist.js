import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import NormalList from '../NormalListLayout/NormalList'

const spotifyApi = new SpotifyWebApi({
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
})

export default function Recommendations({ code }) {
    const accessToken = code.code.code;
    const [playlist, setPlaylist] = useState(null);
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.getFeaturedPlaylists({ limit: 3, offset: 1, country: 'IN', locale: 'sv_SE', timestamp: '2021-10-23T09:00:00' })
            .then(function (data) {
                setPlaylist(data.body.playlists.items[0].id);
                spotifyApi.getPlaylist(data.body.playlists.items[0].id)
                    .then(data => {
                        setTracks(data.body.tracks.items.map(track => {
                            return {
                                artist: track.track.artists[0].name,
                                title: track.track.name,
                                uri: track.track.uri,
                                albumUrl: track.track.album.images[2].url,
                            }
                        }))
                    }).catch((err) => {
                        console.log("Something went wrong!", err);
                    });
            }, function (err) {
                console.log("Something went wrong!", err);
            });
    }, [accessToken])


    // useEffect(() => {
    //     if (!accessToken) return;
    //     if (playlist != null) {
    //         spotifyApi.getPlaylist(playlist)
    //             .then(data => {
    //                 setTracks(data.body.tracks.items.map(track => {
    //                     return {
    //                         artist: track.track.artists[0].name,
    //                         title: track.track.name,
    //                         uri: track.track.uri,
    //                         albumUrl: track.track.album.images[2].url,
    //                     }
    //                 }))
    //             }).catch((err) => {
    //                 console.log("Something went wrong!", err);
    //             });
    //     }
    // }, [accessToken, playlist])
    return (
        <div>
            <NormalList data={{ title: "Featured Playlist", tracks: tracks, setTrack: code.code.setTrack }}></NormalList>
        </div >
    )
}