import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './siteNavbar.css';

export default function SiteNavbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="dark" dark className="fixed-top">
        <NavbarBrand href="/" className="mr-auto">
          <div className="title-text">jz-web-app</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="nav__item">
              <NavLink href="/about-me/">
                <div className="list-text">About Me</div>
              </NavLink>
            </NavItem>
            <NavItem className="nav__item">
              <NavLink href="/blog/">
                <div className="list-text">The Blog</div>
              </NavLink>
            </NavItem>
            <NavItem className="nav__item">
              <NavLink href="/error/">
                <div className="list-text">Error 404 Page</div>
              </NavLink>
            </NavItem>
            <NavItem className="nav__item">
              <NavLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/justin-zhu1018/jz-web-app"
              >
                <div className="list-text">GitHub Repository</div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
