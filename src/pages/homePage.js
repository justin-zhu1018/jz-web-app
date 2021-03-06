import React, {Component} from 'react';
import {Jumbotron, Progress} from 'reactstrap';
import LegacyColor from '../components/legacyColor';
import './homePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="spacing-div" />
        <Jumbotron className="jumbotron-position">
          <h1>Welcome!</h1>
          <hr className="my-2" />
          <p>
            This is my website where I practice my full stack development
            skills. It also acts as a place for me to showcase some of my past
            projects and a way to share my story!
          </p>
          <p>Check out my different pages and enjoy your stay!</p>
        </Jumbotron>
        <div className="spacing-div" />
        <div className="content-container">
          <div className="progress-header-text-container">
            <h4>Justin's Amazing Progress Bars</h4>
            <hr className="my-2" />
          </div>
          <div className="text-center prog-padding">
            <div className="text-padding">
              <b>School Progress</b>
            </div>
            <Progress
              className="progress-bg-color"
              color="primary"
              animated
              value={(2 / 3.5) * 100}
            />
          </div>
          <div className="text-center prog-padding">
            <div className="text-padding">
              <b>Brain Capacity</b>
            </div>
            <Progress
              className="progress-bg-color"
              color="warning"
              animated
              value={1}
            />
          </div>
          <div className="text-center prog-padding">
            <div className="text-padding">
              <b>
                Pain (Obviously I'm referring to my love for{' '}
                <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                  🍞
                </span>
                ... oui)
              </b>
            </div>
            <Progress
              className="progress-bg-color"
              color="danger"
              animated
              value={100}
            />
          </div>
        </div>
        <div className="spacing-div" />
        <LegacyColor />
      </div>
    );
  }
}
