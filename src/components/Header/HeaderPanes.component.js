import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import placeholder from "../../imageAssets/placeholder.png"; 
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    miniText: {
        marginLeft: theme.spacing(2),
        textAlign: 'justified',
        width: '75%'
    },
    miniTextA: {
        marginBottom: '1rem',
        textAlign: 'left',
        marginLeft: '1rem',
    },
    headerButton: {
        marginLeft: '1rem',
    },
}));

export function LeftHeaderPane() {
    const classes = useStyles();
    return (
        <Paper>
            <Typography className={classes.miniTextA} variant="p">
                Author, rock climber, and full stack web developer
            </Typography>
            <Typography className={classes.miniText} variant="h4">
                Welcome to my page, idk if an about me goes here?
            </Typography>
            <Button className={classes.headerButton} variant="contained">Button</Button>
        </Paper>
    );
}

export function RightHeaderPane() {
    const classes = useStyles();
    return (
        //This component will work to cycle image carousel
        <Paper>
                <img alt='Carousel' src={placeholder}></img>
        </Paper>
    );
}