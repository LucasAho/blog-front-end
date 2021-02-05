import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { HeadPane, CardPane } from './ShowcasePanes.component'
import stockSki from "../../imageAssets/stockSki.jpg";
import stockDnD from "../../imageAssets/stockDnD.jpg";
import stockFriends from "../../imageAssets/stockFriends.jpg";
import stockTrivia from "../../imageAssets/stockTrivia.jpg";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '960px'
    },
    cardStack: {
        paddingTop: "1rem",
    },
}));

export default function ProjectBar() {
    const classes = useStyles();
    return (
        <Box className={classes.root} mx='auto' color="secondary">
            <HeadPane />
            <Grid container flexWrap="nowrap" className={classes.cardStack}>
                <Grid item md>
                    <CardPane 
                        img={stockSki}
                        title={"Ski & Board Report"}
                        descript={"Find out the latest information about your favorite Colorado ski resort."}
                    />   
                </Grid>
                <Grid item md>
                    <CardPane 
                        img={stockDnD}
                        title={"DnD Toolkit"}
                        descript={"New to DnD? Tools, tricks, and data storage for Dungeon Masters and players."}
                    />   
                </Grid>
                <Grid item md>
                    <CardPane 
                        img={stockFriends}
                        title={"Friend Finder"}
                        descript={"Are you more similar to me, my ex girlfriend, or Baby Yoda? (Yes, we all hope it's Baby Yoda.)"}
                    />   
                </Grid>
                <Grid item md>
                    <CardPane 
                        img={stockTrivia}
                        title={"Animal Trivia"}
                        descript={"Snow leopards, guinea pigs, octopi...oh my! Think you know animals? Let's find out!"}
                    />   
                </Grid>        
            </Grid>
        </Box>
    )
}