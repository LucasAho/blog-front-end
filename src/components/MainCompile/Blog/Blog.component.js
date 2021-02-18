import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import RecentPostPane, { HeadPane, SubPane } from './BlogPanes.component'
import AppBar from '@material-ui/core/AppBar';
import mentalStock from "../imageAssets/mentalStock.jpeg";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        padding: '1rem',
        backgroundColor: "#180D35",
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1280px'
        },
    },
    cardStack: {
        paddingTop: "1rem",
        padding: "1rem",
        [theme.breakpoints.up('lg')]: {
            padding: "3rem",
        },
    },
    bigCard: {
        paddingBottom: "1.75rem",
    },  
}));

export default function BlogBar() {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} mx='auto' >
            <AppBar position="static">
                <HeadPane/>
                <Grid container align='center' className={classes.cardStack}> 
                    <Grid item xs={12} md className={classes.bigCard}>
                        <RecentPostPane 
                            title={"Escaping Suicide"}
                            date={"Febuary 6th, 2021"}
                            img={mentalStock}
                            descript={"Life’s a bitch, and then you die. Or at least that is what I used to believe, and for over half of my life, I eagerly awaited the second half of that statement[...]"}
                            link={"6029e8223b62d107e0450582"}
                        />
                    </Grid>
                    <Grid item xs={12} md direction="column">
                        <SubPane 
                            title={"The Social Contract"}
                            date={"May 31st, 2020"}
                            descript={"Throughout the course of human history, we have seen countless societies and governing bodies rise and fall. The basis for creating society is apparent, it has led to improvements and progress in humanity’s quality of life, ability to cooperate with and understand[...]"}
                            link={"6029ac743b62d107e0450580"}
                        />
                        <SubPane 
                            title={"Accountability and Representation"}
                            date={"June 1st, 2020"}
                            descript={"The U.S. was founded on the idea that leadership should come in the form of representation, so every voice should be heard and measured by the elected and unelected officials of our establishment[...]"}
                            link={"6029daf83b62d107e0450581"}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}