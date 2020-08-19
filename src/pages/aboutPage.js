import React from 'react';
import {Jumbotron} from 'reactstrap';
import './aboutPage.css';

export default function AboutPage(props) {
  return (
    <div className="aboutPage">
      <Jumbotron className="jumbotron-spacing">
        <h1>About me!</h1>
        <hr className="my-2" />
        <p>
          I don't really have anything here yet, but yeah come back later! :)
        </p>
      </Jumbotron>
    </div>
  );
}
