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
    // ref.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    // });
    console.log(ref);
  };

  return (
      <Box>
          <Header ref={bioRef} handleClickCB={handleClick}/>
          
          
          
          <ProjectBar ref={portRef}/>
          <BlogBar ref={blogRef}/>
          <PodcastBar ref={podRef}/>
          <Footer />
      </Box>
  );
}

export default App;
