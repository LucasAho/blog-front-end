import React, { Component } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Header from './Header/Header.component';
import ProjectBar from './Showcase/Showcase.component';
import BlogBar from './Blog/Blog.component';
import PodcastBar from './Podcast/Podcast.component';
import { Box } from '@material-ui/core';
import { Element } from 'react-scroll';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            backgroundColor: "#193469",
        },
    },
}));

export default function BuildHome () {

    const classes = useStyles();
        return (
            <Box className={classes.root}>
                <Element id='home' name='home'>
                    <Header />
                </Element>
                <Element id='portfolio' name='portfolio'>
                    <ProjectBar />
                </Element>
                <Element id='blog' name='blog'>
                    <BlogBar />
                </Element>
                <Element id='podcast' name='podcast'>
                    <PodcastBar />
                </Element>
            </Box>
        );
    }