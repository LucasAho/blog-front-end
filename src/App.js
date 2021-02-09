import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header.component';
import ProjectBar from './components/Showcase/Showcase.component';
import BlogBar from './components/Blog/Blog.component';
import PodcastBar from './components/Podcast/Podcast.component';
import Footer from './components/Footer/Footer.component';
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

function App() {
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
        <Footer />
      </Box>
  );
}

export default App;
