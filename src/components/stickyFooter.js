import React from 'react';
import {Row, Col} from 'reactstrap';

export default function StickyFooter(props) {
  return (
    <div className="footer">
      <div className="footer-content">
        <Row>
          <Col className="">
            <h4>About</h4>
          </Col>
          <Col>
            <h4>Links</h4>
          </Col>
          <Col>
            <h4>Contact Me!</h4>
          </Col>
        </Row>
        {/* <div className="footer-section about">
        </div>
        <div className="footer-section links"></div>
        <div className="footer-section contact"></div> */}
      </div>
      <div className="footer-bottom">
        <span>
          <p>
            {'Site designed and created by '}
            <a href="https://github.com/justin-zhu1018">justin-zhu1018</a>
          </p>
        </span>
      </div>
    </div>
  );
}
