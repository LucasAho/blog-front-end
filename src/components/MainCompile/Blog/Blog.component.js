import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import RecentPostPane, { SubPane } from './BlogPanes.component'
import AppBar from '@material-ui/core/AppBar';
import CommandsBg from "../imageAssets/CommandsBg.png";
import HeaderReusable from './../Reusables/HeaderReusable.component';

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
                <HeaderReusable
                    headText={"The Creative Process"}
                    subText={"A blog where I share a mixture of politically minded essays, stories of my personal walk through life, and creative works associated with my world building and upcoming series of novels"} 
                    variant={"p"}
                />
                <Grid container align='center' className={classes.cardStack}> 
                    <Grid item xs={12} md className={classes.bigCard}>
                        <RecentPostPane 
                            title={"First Pillar of the Old Stone"}
                            date={"February 22nd, 2021"}
                            img={CommandsBg}
                            descript={"The first of six pillars supporting Oradren's Temple. The six pillars are analogous to the Judaic ten commandments in Rohiren orthodox faith."}
                            link={"60340ddb95cb383ea4723058"}
                        />
                    </Grid>
                    <Grid item xs={12} md direction="column">
                        <SubPane 
                            title={"Escaping Suicide"}
                            date={"February"}
                            descript={"Overcoming suicidal ideation has been the hardest battle of my life. Looking back from a place of stability and maturity, I share my jouney in the hopes of helping others on the same path."}
                            link={"6029e8223b62d107e0450582"}
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