import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer.component';
import BuildHome from './components/MainCompile/ViewBuilder.component';
import BuildBlog from './components/BlogCompile/BlogViewBuilder.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BuildHome} />
        <Route exact path="/blog" component={BuildBlog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
