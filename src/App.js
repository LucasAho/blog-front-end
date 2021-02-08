import React, { useRef } from 'react';
import Header from './components/Header/Header.component';
import ProjectBar from './components/Showcase/Showcase.component';
import BlogBar from './components/Blog/Blog.component';
import PodcastBar from './components/Podcast/Podcast.component';
import Footer from './components/Footer/Footer.component';
import { Box } from '@material-ui/core';



function App() {
  const bioRef = useRef();
  const blogRef = useRef();
  const podRef = useRef();
  const portRef = useRef();

  const handleClick = (ref) => {
    blogRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  };

  return (
      <Box>
        <div ref={bioRef}>
          <Header handleClickCB={handleClick}/>
        </div>
          <ProjectBar ref={portRef}/>
          <div ref={blogRef}>
          <BlogBar />
          </div>
          <PodcastBar ref={podRef}/>
          <Footer />
      </Box>
  );
}

export default App;
