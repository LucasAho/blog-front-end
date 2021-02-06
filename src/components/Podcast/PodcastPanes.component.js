import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import placeholder from "../../imageAssets/placeholder.png";


const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
      },
    titleDiv: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    title: {
        textAlign: 'center',
    },
    subTextDiv: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
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

export function HeadPane() {
    const classes = useStyles();
    return (
        <Box>
            <div className={classes.titleDiv}>
                <Typography className={classes.title} variant="h3" noWrap>
                    Tales of Maalima
                </Typography>
            </div>

            <div className={classes.subTextDiv}>
                <Typography variant="p">
                    WiP podcast detailing stories and lore from my fictional universe
                </Typography>
            </div>
        </Box>
    );
}

export function MainCard() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Episode 1
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        ToM
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={placeholder}
                title="Live from space album cover"
            />
        </Card>
    );
}