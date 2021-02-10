import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { HeadPane, MainCard } from './PodcastPanes.component';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1280px'
        },
        backgroundColor: "#FFFFFF",
        paddingBottom: '2rem'
    },
    cardStack: {
        paddingTop: "1rem",
    },
}));

export default function PodcastBar() {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} px='1rem' mx='auto'>
            <HeadPane />
            <Grid container>
                <Grid item xs md={7}>
                    <MainCard/>
                </Grid>
                <Grid item>
                    {/*scrolldown list of episodes here*/}
                </Grid>
            </Grid>
    
        </Box>
    )
}