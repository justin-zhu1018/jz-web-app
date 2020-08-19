import React, {Component} from 'react';
import './App.css';
import BlogPage from './pages/blogPage';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import ErrorPage from './pages/errorPage';
import SiteNavbar from './components/siteNavbar';
import Footer from './components/footer';
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
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
