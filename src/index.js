import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header.component';
import ProjectBar from './components/Showcase/Showcase.component';
import BlogBar from './components/Blog/Blog.component';
import PodcastBar from './components/Podcast/Podcast.component';
import Footer from './components/Footer/Footer.component';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme/theme.component';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <ProjectBar />
      <BlogBar />
      <PodcastBar />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
