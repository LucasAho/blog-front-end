import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        paddingBottom: '2rem'
    },
    title: {
        //width: '100%',
        textAlign: 'center',
    },
    subTextDiv: {
        //textAlign: 'center'\
        marginBottom: '2rem'
    },
    miniText: {
        textAlign: 'center',
        display: 'block',
    },
    titleDiv: {
        alignItems: 'flexstart',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    },
    sectionDesktop: {
        display: 'flex',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function ProjectBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.appBar} color="secondary">
                <div className={classes.titleDiv}>
                    <Typography className={classes.title} variant="h3" noWrap>
                        Podcast: Tales of Maalima
                    </Typography>
                </div>
                <Box className={classes.subTextDiv} mx='auto'>
                    <Typography className={classes.miniText} variant="p">
                        WiP podcast detailing stories and lore from my fictional universe
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}