import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { HeadPane, MainCard } from './PodcastPanes.component';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '960px',
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
        <Box className={classes.root}  mx='auto'>
            <HeadPane />
            <Grid container>
                <Grid item md={7}>
                    <MainCard/>
                </Grid>
                <Grid item>
                    {/*scrolldown list of episodes here*/}
                </Grid>
            </Grid>
    
        </Box>
    )
}