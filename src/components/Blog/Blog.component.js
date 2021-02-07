import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { HeadPane, RecentPane, SubPane } from './BlogPanes.component'
import AppBar from '@material-ui/core/AppBar';
import stockMental from "../../imageAssets/stockMental.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '960px',
        padding: '1rem',
        backgroundColor: "#180D35"
    },
    cardStack: {
        paddingTop: "1rem",
    },  
}));

export default function BlogBar() {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} mx='auto' >
            <AppBar position="static">
                <HeadPane/>
                <Grid container align='center' className={classes.cardStack}> 
                    <Grid item md>
                        <RecentPane 
                            title={"Growing Up Suicidal"}
                            date={"Febuary 6th, 2021"}
                            img={stockMental}
                            descript={"Life’s a bitch, and then you die. Or at least that is what I used to believe, and for over half of my life, I eagerly awaited the second half of that statement[...]"}
                            link={"https://docs.google.com/document/d/1xS5POXXUN3dl46hdM00BYt13qZrB8165iTpyMfwHhE8/edit?usp=sharing"}
                        />
                    </Grid>
                    <Grid item md direction="column">
                        <SubPane 
                            title={"The Social Contract"}
                            date={"May 31st, 2020"}
                            descript={"Throughout the course of human history, we have seen countless societies and governing bodies rise and fall. The basis for creating society is apparent, it has led to improvements and progress in humanity’s quality of life, ability to cooperate with and understand[...]"}
                            link={"https://docs.google.com/document/d/16CwWnn1NO6EJwLmm3hDceWlAEo3Em9_TYTrQiskYn7E/edit?usp=sharing"}
                        />
                        <SubPane 
                            title={"Accountability and Representation"}
                            date={"June 1st, 2020"}
                            descript={"The U.S. was founded on the idea that leadership should come in the form of representation, so every voice should be heard and measured by the elected and unelected officials of our establishment[...]"}
                            link={"https://docs.google.com/document/d/19EPRTXs6dlxt8ioIVrfSuDkL0mgg2Y7zyGQ0w80GM3c/edit?usp=sharing"}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}