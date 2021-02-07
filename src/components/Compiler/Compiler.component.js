import React, { Component, useState, useRef } from 'react';
import Header from './components/Header/Header.component';
import ProjectBar from './components/Showcase/Showcase.component';
import BlogBar from './components/Blog/Blog.component';
import PodcastBar from './components/Podcast/Podcast.component';
import Footer from './components/Footer/Footer.component';
import { Box } from '@material-ui/core';

export default function ComponentCompiler() {
    const bioRef = React.useRef();
    const blogRef = React.useRef();
    const podRef = React.createRef();
    const portRef = React.createRef();

    return (
        <Box>
            <Header ref={bioRef}/>
            <ProjectBar ref={portRef}/>
            <BlogBar ref={blogRef}/>
            <PodcastBar ref={podRef}/>
            <Footer />
        </Box>
        
    );
}