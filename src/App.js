import React, {Component} from 'react';
import './App.css';
import SiteNavbar from './components/siteNavbar.js';
import Footer from './components/footer';
import BlogPage from './pages/blogPage.js';
import AboutPage from './pages/aboutPage.js';
import HomePage from './pages/homePage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <SiteNavbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/blog/" exact component={BlogPage} />
            <Route path="/about-me/" exact component={AboutPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
