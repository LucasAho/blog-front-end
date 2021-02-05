import React from 'react';
import { Grid, Button, Typography, Paper, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import placeholder from "../../imageAssets/placeholder.png";
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    subText: {
        textAlign: 'justified',
    },
    mainText: {
        textAlign: 'left',
    },
    headerButton: {
        marginTop: '1rem',
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flexstart',
        paddingBottom: '1rem',
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    leftDiv: {
        padding: '1rem'
    }
}));

export function ToolbarPane() {
    const classes = useStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h3" noWrap>
                Lucas Asher
            </Typography>
        </Toolbar>
    );
}

export function LeftHeaderPane() {
    const classes = useStyles();
    return (
        <div className={classes.leftDiv}>
            <Typography className={classes.subText} variant="p">
                Author, rock climber, and full stack web developer
            </Typography>
            <Typography className={classes.mainText} variant="h4">
                Welcome to my page, idk if an about me goes here?
            </Typography>
            <Button className={classes.headerButton} variant="contained">Button</Button>
        </div>
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