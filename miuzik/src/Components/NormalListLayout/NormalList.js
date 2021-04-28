import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Container } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        backgroundColor: "#000",
        '&::-webkit-scrollbar': {
            display: 'none'
        },
    },
    title: {
        color: theme.palette.primary,
    },
    container: {
        maxWidth: 1080,
        height: 385
    },
}));



export default function NormalList(props) {
    const classes = useStyles();
    const handleClick = (res) => {
        props.data.setTrack.setTrack(res)
    }

    return (
        <Container fixed className={classes.container} >
            <Typography color="textPrimary" gutterBottom variant="h2" align="left">
                {props.data.title}
            </Typography>
            <List className={classes.root} >
                {props.data.tracks.map((track) => {
                    return (
                        <ListItem key={track.uri} button onClick={e => handleClick(track.uri)} >
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${track + 1}`}
                                    src={track.albumUrl}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={track.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {track.artist}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton aria-label={`star ${track.title}`} onClick={e => handleClick(track.uri)} >
                                    <PlayArrowIcon className={classes.title} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
}