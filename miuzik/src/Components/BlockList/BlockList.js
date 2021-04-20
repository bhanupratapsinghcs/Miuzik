// import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 200,
        maxHeight: 200,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 200,
    },
    container: {
        maxWidth: 1080,
        // backgroundColor: "#06757",
        height: 385
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));



export default function BlockList(props) {

    const classes = useStyles()
    return (
        <div>
            <Container fixed className={classes.container}>
                <Typography color="textPrimary" gutterBottom variant="h2" align="left">
                    {props.data.title}
                </Typography>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={6} style={{}}>
                        {props.data.tracks.map((track) => (
                            <GridListTile key={track.uri}>
                                <img src={track.albumUrl} alt={track.title} style={{ "width": "200px", "height": "200px" }} />
                                <GridListTileBar
                                    // title={track.title}
                                    title={track.artist}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${track.title}`}>
                                            <PlayArrowIcon className={classes.title} />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                {/* <Grid container spacing={3}>
                    {
                        props.data.tracks.map((track) => (
                            <Grid item xs={12} sm={4} key={track.uri}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.media} image={track.albumUrl} />
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid> */}
            </Container>
        </div>
    )
}
