import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export default function BlockList(props) {

    const classes = useStyles();
    return (
        <div>
            <Container>
                <Typography color="textPrimary" gutterBottom variant="h2" align="left">
                    {props.data.title}
                </Typography>
                <Grid container spacing={3}>
                    {
                        props.data.tracks.map((track) => (
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
