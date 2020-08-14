import React from 'react';
import {Jumbotron} from 'reactstrap';
export default function AboutPage(props) {
  return (
    <div className="page-noflex">
      <div className="jumbotron-container">
        <Jumbotron>
          <h1>About me!</h1>
          <p>
            I don't really have anything here yet, but yeah come back later! :)
          </p>
        </Jumbotron>
      </div>
    </div>
  );
}
