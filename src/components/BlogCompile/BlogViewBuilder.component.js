import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import ArticleInView from "./Article/Article.component"
import SidebarMenu from './Sidebar/Sidebar.component';
import RecentArticleComponent from './Article/RecentArticle.component';
import Navbar from "./Navbar/Navbar.component";

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
            <Navbar />
            <Grid container>
                <Grid item md={9}>
                    <RecentArticleComponent 
                        articleId={"6029ac743b62d107e0450580"}
                    />
                </Grid>
                <Grid item sm={3}>
                    <SidebarMenu />
                </Grid>
            </Grid>
        </Box>
    );
}