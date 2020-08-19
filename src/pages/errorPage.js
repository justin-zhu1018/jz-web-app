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
        <div className="container">
          {/* <h1>You can have a picture of a doggo</h1> */}
          <h1>kthnxbyeeee :)</h1>
        </div>
      </div>
    );
  }
}
