import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import ArticleInView from "./Article/Article.component"
import SidebarMenu from './Sidebar/Sidebar.component';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            backgroundColor: "#193469",
            maxWidth: '1280px'
        },
    },
}));

export default function BuildBlog() {

    const classes = useStyles();
        return (
            <Box className={classes.root} mx='auto'>
                <Grid container>
                    <Grid item xs={9}>
                        <ArticleInView/>
                    </Grid>
                    <Grid item xs={3}>
                        <SidebarMenu/>
                    </Grid>
                </Grid>
            </Box>
        );
    }