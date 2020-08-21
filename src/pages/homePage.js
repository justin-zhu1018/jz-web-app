import React, {Component} from 'react';
import {Jumbotron, Progress} from 'reactstrap';
import './homePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Jumbotron className="jumbotron-spacing">
          <h1>Welcome!</h1>
          <hr className="my-2" />
          <p>
            This is my website where I practice my full stack development
            skills. It also acts as a place for me to store some of my past
            projects and a way to share my story!
          </p>
          <p>Feel free to check out the Blog Page and About Me!</p>
        </Jumbotron>
        <div className="container">
          <div className="text-center prog-padding">
            <b>School Progress</b>
            <Progress color="primary" animated value={(2 / 3.5) * 100} />
          </div>
          <div className="text-center prog-padding">
            <b>Brain Capacity</b>
            <Progress color="warning" animated value={1} />
          </div>
          <div className="text-center prog-padding">
            <b>
              Pain (Obviously I'm referring to my love for{' '}
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                🍞
              </span>
              ... oui.)
            </b>
            <Progress color="danger" animated value={100} />
          </div>
        </div>
      </div>
    );
  }
}
