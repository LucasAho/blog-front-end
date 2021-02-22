import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import SidebarMenu from './Sidebar/Sidebar.component';
import Navbar from "./Navbar/Navbar.component";
import ConLang from './Article/conLangAlphabet.component';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            //backgroundColor: "#193469",
            maxWidth: '1280px'
        },
    },
}));

export default function BuildBlog(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root} mx='auto'>
            <Navbar />
            <Grid container>
                <Grid item md={9}>
                    <ConLang/>
                </Grid>
                <Grid item sm={3}>
                    <SidebarMenu />
                </Grid>
            </Grid>
        </Box>
    );
}