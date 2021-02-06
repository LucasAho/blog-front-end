import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Card, Grid, CardActionArea, Button, Typography, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { HeadPane, RecentPane, SubPane } from './BlogPanes.component'
import AppBar from '@material-ui/core/AppBar';
import placeholder from "../../imageAssets/placeholder.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '960px',
        padding: '1rem',
        backgroundColor: "#180D35"
    },
    cardSmall: {
        maxWidth: 360,
        marginBottom: "2rem",
    },
    cardStack: {
        paddingTop: "1rem",
        marginLeft: "3rem",
        marginRight: "3rem",
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    media: {
        height: 280,
    },     
}));

export default function BlogBar() {
    const classes = useStyles();

    return (
        <Box className={classes.root} mx='auto'>
            <AppBar position="static" color="primary">
                <HeadPane/>
                <Grid container className={classes.cardStack}>
                        <Grid item md>
                            <RecentPane />
                        </Grid>
                        <Grid item md direction="column">
                            <SubPane />
                            <SubPane />
                        </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}