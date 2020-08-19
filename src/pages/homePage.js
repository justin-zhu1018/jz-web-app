import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import './homePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Jumbotron className="jumbotron-spacing">
          <h1>Welcome!</h1>
          <hr className="my-2" />
          <p>
            This is my website where I show off some cool stuff. It's currently
            pretty empty, but I'll add more eventually!
          </p>
          <p>
            If you would like to see a somewhat complete page please visit the
            Blog Page.
          </p>
        </Jumbotron>
      </div>
    );
  }
}
