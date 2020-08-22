import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import './errorPage.css';

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="errorPage">
        <Jumbotron className="jumbotron-spacing">
          <h1>Oops! </h1>
          <hr className="my-2" />
          <p>
            You made it to the error page! Please navigate back to{' '}
            <a href="/">safety</a>!
          </p>
        </Jumbotron>
        <div className="error-container">
          <h4>
            ERROR 404: This is where every invalid page gets redirected to!
          </h4>
          <p>
            Nothing special, but gets the job done. Now go back to the other
            pages that I worked hard on. :)
          </p>
        </div>
      </div>
    );
  }
}
