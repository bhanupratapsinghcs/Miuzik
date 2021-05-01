import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#000",
        margin: 'auto',
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 500,
        height: 300,
        display: 'flex',
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    details: {
        display: 'flex',
        width: 200,
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
        height: 300
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


function Details({ code }) {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {code.trackDetails.title}
                            </Typography>
                            <Divider />
                            <Typography variant="subtitle1" color="textSecondary">
                                {code.trackDetails.artist}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={code.trackDetails.albumUrl}
                        title={code.trackDetails.title}
                    />
                </Card>
            </div>
        </>
    )
}

export default Details