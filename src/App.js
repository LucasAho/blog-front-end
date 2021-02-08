import React from 'react';
import Header from './components/Header/Header.component';
import ProjectBar from './components/Showcase/Showcase.component';
import BlogBar from './components/Blog/Blog.component';
import PodcastBar from './components/Podcast/Podcast.component';
import Footer from './components/Footer/Footer.component';
import { Box } from '@material-ui/core';
import { Element } from 'react-scroll';


function App() {
  return (
      <Box>
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
        <Footer />
      </Box>
  );
}

export default App;
