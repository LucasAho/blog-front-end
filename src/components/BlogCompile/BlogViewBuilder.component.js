import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Element } from 'react-scroll';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            backgroundColor: "#193469",
        },
    },
    backGround: {
        backgroundColor: "#1180D3",
    }
}));

export default function BuildBlog() {

    const classes = useStyles();
        return (
            <Box className={classes.root}>
                <Box className={classes.backGround}/>
            </Box>
        );
    }