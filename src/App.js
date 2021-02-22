import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer.component';
import BuildHome from './components/MainCompile/ViewBuilder.component';
import BuildBlog from './components/BlogCompile/BlogViewBuilder.component';
import ArticleView from './components/BlogCompile/ArticleView.component';
import { Element } from 'react-scroll';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BuildHome} />
        <Route exact path="/blog/conLang" component={BuildBlog} />
        <Route exact path="/blog/:id" component={ArticleView} />

      </Switch>

      <Element id='contact' name='contact'>
        <Footer />
      </Element>
    </Router>
  );
}

export default App;
