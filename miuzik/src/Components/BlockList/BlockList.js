import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: '0adaf2a4ad6248869d5b1acf78494f58',
})

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function BlockList({ code }) {
    const accessToken = code;
    const [recommendation, setRecommendation] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.getRecommendations({
            min_energy: 0.4,
            seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
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
    // console.log(recommendation);
    return (
        <div>
            <Container>
                <Typography color="textPrimary" gutterBottom variant="h2" align="left">
                    Recommendation
                </Typography>
                <Grid container spacing={3}>
                    {
                        recommendation.map((track) => (
                            <Grid item xs={12} sm={4} key={track.uri}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.media} image={track.albumUrl} />
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}
