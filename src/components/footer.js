import React from 'react';
// import {youtube, linkedin, reddit} from './svgIcons.json';
import './footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer__title">Hello there!</span>
        <p className="footer__text">
          Though the website is kind of empty, slowly but surely, this website
          is being developed. So stay tuned!
        </p>
        <p className="footer__main-copyright">
          &copy; Copyright 2020 jz-web-app
        </p>
        <hr className="footer__hr" />
        <div className="footer__sections">
          <div className="footer__section">
            <span className="footer__title">Contact Info</span>
            <a href="mailto: justin-zhu1018@gmail.com" className="footer__link">
              Email
            </a>
            <a
              href="https://github.com/justin-zhu1018/jz-web-app"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/justin-zhu1018/"
              className="footer__link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UCTIHUd9N8lnUC3ackHvJaSg"
              className="footer__link"
            >
              Youtube
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="footer__link"
            >
              Phone Number
            </a>
          </div>
          <div className="footer__section">
            <span className="footer__title">Other Links</span>
            <a
              className="footer__link"
              href="https://docs.google.com/document/d/1MupDO-RMpOXpgkK8nM45wxgFp0mPxeasGWBtKIR3-II/edit?usp=sharing"
            >
              My Resume
            </a>
            <a
              className="footer__link"
              href="https://github.com/justin-zhu1018/flazey-bot"
            >
              Clash Royale Discord Bot
            </a>
            <a
              className="footer__link"
              href="https://docs.google.com/document/d/1hqSKPdD8BYJs1Oqc1AWJoJg5hovUv-IR_NVx9QSqPSo/edit"
            >
              SCE 2020 Internship Docs
            </a>
            <a
              className="footer__link"
              href="https://www.youtube.com/watch?v=pkqGYBR-rgA"
            >
              Contribution to Core-v4
            </a>
          </div>
        </div>
        <div>{/* <hr className="footer__hr" /> */}</div>
      </div>
    </footer>
  );
}
