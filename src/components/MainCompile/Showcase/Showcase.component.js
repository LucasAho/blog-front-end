import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { HeadPane, CardPane } from './ShowcasePanes.component'
import stockSki from "../imageAssets/stockSki.jpg";
import stockDnD from "../imageAssets/stockDnD.jpg";
import stockFriends from "../imageAssets/stockFriends.jpg";
import stockTrivia from "../imageAssets/stockTrivia.jpg";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1280px'
        },
        backgroundColor: "#FFFFFF",
        paddingBottom: '1rem'
    },
    cardStack: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '1080px'
        },
        paddingTop: "1rem",
    },
}));

export default function ProjectBar() {
    const classes = useStyles();

    return (
        <Box className={classes.root} align='center' px='1rem' mx='auto'>
            <HeadPane />
            <Grid container align='center' className={classes.cardStack}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPane
                        img={stockSki}
                        title={"Ski & Board Report"}
                        descript={"Find out the latest information about your favorite Colorado ski resort."}
                        link={"https://lucasaho.github.io/Project1/"}
                        buttonLink={"https://github.com/LucasAho/Project1"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPane
                        img={stockDnD}
                        title={"DnD Toolkit"}
                        descript={"New to DnD? Tools, tricks, and data storage for Dungeon Masters and players."}
                        link={"https://hidden-savannah-88913.herokuapp.com/"}
                        buttonLink={"https://github.com/LucasAho/Project-2"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPane
                        img={stockFriends}
                        title={"Friend Finder"}
                        descript={"Are you more similar to me, my ex girlfriend, or Baby Yoda? (Yes, we all hope it's Baby Yoda.)"}
                        link={"https://quiet-gorge-84311.herokuapp.com/"}
                        buttonLink={"https://github.com/LucasAho/crispy-guacamole"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPane
                        img={stockTrivia}
                        title={"Animal Trivia"}
                        descript={"Snow leopards, guinea pigs, octopi...oh my! Think you know animals? Let's find out!"}
                        link={"https://lucasaho.github.io/TriviaGame/"}
                        buttonLink={"https://github.com/LucasAho/TriviaGame"}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}