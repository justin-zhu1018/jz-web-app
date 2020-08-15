import React from 'react';
import {Row, Col} from 'reactstrap';
import './footer.css';

export default function StickyFooter(props) {
  return (
    <div>
      <footer className="text-left bg-dark text-white p-4">
        <Row className="footer-text">
          <Col>
            <b>Hello there!</b>
            <p>
              I am Justin Zhu. Currently, I'm in my 3rd year of studying
              Software Engineering at San Jose State University! Slowly but
              surely, I am adding onto this website.
            </p>
            <p>Stay tuned! :)</p>
          </Col>
          <Col>
            <b className="heightAdjust">Contact Information</b>
            <p className="heightAdjust">
              {'Email: '}
              <a href="mailto: justin.zhu1018@gmail.com">
                justin.zhu1018@gmail.com
              </a>
            </p>
            <p className="heightAdjust">
              {'GitHub: '}
              <a href="https://www.linkedin.com/in/justin-zhu1018/">
                https://www.linkedin.com/in/justin-zhu1018/
              </a>
            </p>
            <p className="heightAdjust">
              {'Linkedin: '}
              <a href="https://www.linkedin.com/in/justin-zhu1018/">
                https://www.linkedin.com/in/justin-zhu1018/
              </a>
            </p>
            <p className="heightAdjust">
              {'Phone Number: '}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Find it here!
              </a>
            </p>
          </Col>
          <Col>
            <b>Other Links</b>
            <p>
              <a
                className="headerLink"
                href="https://docs.google.com/document/d/1MupDO-RMpOXpgkK8nM45wxgFp0mPxeasGWBtKIR3-II/edit?usp=sharing"
              >
                My Resume
              </a>
            </p>
            <p>
              <a
                className="headerLink"
                href="https://github.com/justin-zhu1018/flazey-bot"
              >
                Clash Royale Discord Bot?
              </a>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
